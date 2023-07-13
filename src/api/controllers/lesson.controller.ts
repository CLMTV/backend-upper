import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllLesson = async (req: Request, res: Response) => {
    try {
        const lesson = await prisma.lesson.findMany({
            include: {
                course: true,
                video: true, 
                media: true, 
                note: true, 
                user_lesson: true
            },
          });
        res.status(200).json(lesson);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getLessonById = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const parsedId = parseInt(id, 10);
        const lesson = await prisma.lesson.findUnique({
            include: {
                course: true,
                video: true, 
                media: true, 
                note: true, 
                user_lesson: true
            },
            where: {
                id: parsedId
            }
        });
        res.status(200).json(lesson);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createLesson = async (req: Request, res: Response) => {
    const {content, order, points, courseId, videoId, media, note} = req.body || {};
    if (!content) {
        return res.status(400).json({error: 'content is required'});
    }
    try {
        const lesson = await prisma.lesson.create({
            data: {content, order, points, courseId, videoId, media, note},
        });
        res.status(201).json(lesson);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateLesson = async (req: Request, res: Response) => {
    const {content, order, points} = req.body || {};
    const {id} = req.params
    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const updatelesson = await prisma.lesson.update({
            where: {
                id: parsedId
            },
            data: {
                content: content,
                order: order, 
                points: points
            }
        })
        res.status(200).json(updatelesson);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}


const deleteLessonById = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const parsedId = parseInt(id, 10);
        const deletelesson = await prisma.lesson.delete({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(deletelesson);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllLesson, deleteLessonById, getLessonById, createLesson, updateLesson}