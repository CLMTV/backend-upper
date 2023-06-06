import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


const getAllSections = async (req: Request, res: Response) => {
    try {
        const sections = await prisma.section.findMany();
        res.status(200).json(sections);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getSectionById = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const section = await prisma.section.findUnique({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(section);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createSection = async (req: Request, res: Response) => {
    console.log(req.body)
    const {name, order} = req.body || {};

    try {
        const section = await prisma.section.create({
            data: {name, order},
        });
        res.status(201).json(section);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateSection = async (req: Request, res: Response) => {
    const {name, order} = req.body || {};
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const updateSection = await prisma.section.update({
            where: {
                id: parsedId
            },
            data: {
                name: name,
                order: order
            }
        })
        res.status(200).json(updateSection);

    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const deleteSectionById = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const deleteSection = await prisma.section.delete({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(deleteSection);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllSections, createSection, getSectionById, updateSection, deleteSectionById}