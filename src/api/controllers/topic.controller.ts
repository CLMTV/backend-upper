import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


const getAllUserTopics = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({
            error: 'user id is required'
        });
    }
    try {
        const parsedId = parseInt(id, 10);
        const topics = await prisma.topic.findMany({
            where: {
                authorId: parsedId
            },
            include: {
                topic_reaction: true
            }
        });
        res.status(200).json(topics);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getAllSectionTopics = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({
            error: 'section id is required'
        });
    }
    try {
        const parsedId = parseInt(id, 10);
        const topics = await prisma.topic.findMany({
            where: {
                sectionId: parsedId
            },
            include: {
                topic_reaction: true
            }
        });
        res.status(200).json(topics);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}


const getTopicById = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const topic = await prisma.topic.findUnique({
            where: {
                id: parsedId
            },
            include: {
                topic_reaction: true
            }
        });
        res.status(200).json(topic);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createTopic = async (req: Request, res: Response) => {
    console.log(req.body)
    const {name, authorId, sectionId} = req.body || {};

    try {
        const topic = await prisma.topic.create({
            data: {name, authorId, sectionId},
        });
        res.status(201).json(topic);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const deleteTopicById = async (req: Request, res: Response) => {
    const {id} = req.params
    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const updateTopic = await prisma.message.update({
            where: {
                id: parsedId
            },
            data: {
                deleted: true
            }
        })
        res.status(200).json(updateTopic);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllUserTopics, getAllSectionTopics, createTopic, getTopicById, deleteTopicById}