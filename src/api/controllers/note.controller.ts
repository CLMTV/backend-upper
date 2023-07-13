import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllNotes = async (req: Request, res: Response) => {
    try {
        const note = await prisma.note.findMany({
            include: {
                user: true, 
                course: true,
                lesson: true
            }
        });
        res.status(200).json(note);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getNoteById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const note = await prisma.note.findUnique({
            include: {
                user: true, 
                course: true,
                lesson: true
            },
            where: {
                id: id
            }
        });
        res.status(200).json(note);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getNoteByIdCourse = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const note = await prisma.note.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(note);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getNoteByIdLesson = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const note = await prisma.note.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(note);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createNote = async (req: Request, res: Response) => {
    const {userId, courseId, lessonId, content} = req.body || {};
    console.log(req.body);
    
    if (!content) {
        return res.status(400).json({error: 'content is required'});
    }
    try {
        const note = await prisma.note.create({
            data: {userId, courseId, lessonId, content},
        });
        res.status(201).json(note);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateNote = async (req: Request, res: Response) => {
    const {id, userId, courseId, lessonId, content} = req.body || {};

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const updatenote = await prisma.note.update({
            where: {
                id: id
            },
            data: {
                userId: userId,
                courseId: courseId, 
                lessonId: lessonId, 
                content: content
            }
        })
        res.status(200).json(updatenote);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}


const deleteNoteById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const deletenote = await prisma.note.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(deletenote);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllNotes, deleteNoteById, getNoteById, getNoteByIdCourse, getNoteByIdLesson, createNote, updateNote}