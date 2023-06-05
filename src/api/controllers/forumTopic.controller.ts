import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


const getAllTopics = async (req: Request, res: Response) => {
    try {
        const topics = await prisma.topic.findMany();
        res.status(200).json(topics);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getTopicById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const topic = await prisma.topic.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(topic);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createTopic = async (req: Request, res: Response) => {
    console.log(req.body)
    const {name, authorId} = req.body || {};

    let like_count = 0;
    let flag_count = 0;

    try {
        const topic = await prisma.topic.create({
            data: {name, authorId, like_count, flag_count},
        });
        res.status(201).json(topic);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const deleteTopicById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const deleteTopic = await prisma.topic.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(deleteTopic);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllTopics, createTopic, getTopicById, deleteTopicById}