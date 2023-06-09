import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


const getAllUserMessages = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({
            error: 'user id is required'
        });
    }
    try {
        const parsedId = parseInt(id, 10);
        const messages = await prisma.message.findMany({
            where: {
                authorId: parsedId
            },
            include: {
                message_reaction: true
            }
        });
        res.status(200).json(messages);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getAllTopicMessages = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'topic id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const messages = await prisma.message.findMany({
            where: {
                topicId: parsedId
            },
            include: {
                message_reaction: true
            }
        });
        res.status(200).json(messages);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getMessageById = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const message = await prisma.message.findUnique({
            where: {
                id: parsedId
            },
            include: {
                message_reaction: true
            }
        });
        res.status(200).json(message);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createMessage = async (req: Request, res: Response) => {
    console.log(req.body)
    const {content, authorId, topicId} = req.body || {};

    try {
        const message = await prisma.message.create({
            data: {content, authorId, topicId},
        });
        res.status(201).json(message);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const deleteMessageById = async (req: Request, res: Response) => {
    const {id} = req.params
    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const updateMessage = await prisma.message.update({
            where: {
                id: parsedId
            },
            data: {
                deleted: true
            }
        })
        res.status(200).json(updateMessage);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllUserMessages, getAllTopicMessages, createMessage, getMessageById, deleteMessageById}