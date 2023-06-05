import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllCourses = async (req: Request, res: Response) => {
    try {
        const course = await prisma.course.findMany();
        res.status(200).json(course);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getCourseById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const course = await prisma.course.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(course);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createCourse = async (req: Request, res: Response) => {
    const {name, description, lesson, badge, note} = req.body || {};
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
    const {id, name, description} = req.body || {};
    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const updateCourse = await prisma.course.update({
            where: {
                id: id
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
    const {id} = req.body
    try {
        const deleteCourse = await prisma.course.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(deleteCourse);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllCourses, deleteCourseById, getCourseById, createCourse, updateCourse}