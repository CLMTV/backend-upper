import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllCourses = async (req: Request, res: Response) => {
    try {
        const course = await prisma.course.findMany({
            include: {
                lesson: true,
                badge: true,
                note: true,
                user_course: true,
            }
        });
        res.status(200).json(course);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getCourseById = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const parsedId = parseInt(id, 10);
        const course = await prisma.course.findUnique({
            include: {
                lesson: true,
                badge: true,
                note: true,
                user_course: true,
            },
            where: {
                id: parsedId
            }
        });
        res.status(200).json(course);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createCourse = async (req: Request, res: Response) => {
    const {name, description, lesson, badge, note} = req.body || {};
    console.log("CONTROLER",req);
    
    if (!name) {
        return res.status(400).json({error: 'name and description are required'});
    }
    try {
        const course = await prisma.course.create({
            data: {name, description, lesson, badge, note},
        });
        res.status(201).json(course);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateCourse = async (req: Request, res: Response) => {
    const {name, description} = req.body || {};
     const {id} = req.params;
    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const updateCourse = await prisma.course.update({
            where: {
                id: parsedId
            },
            data: {
                name: name,
                description: description
            }
        })
        res.status(200).json(updateCourse);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}


const deleteCourseById = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const parsedId = parseInt(id, 10);
        const deleteCourse = await prisma.course.delete({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(deleteCourse);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllCourses, deleteCourseById, getCourseById, createCourse, updateCourse}