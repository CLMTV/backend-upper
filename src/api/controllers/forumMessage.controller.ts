import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


const getAllForumMessages = async (req: Request, res: Response) => {
    try {
        const messages = await prisma.message.findMany();
        res.status(200).json(messages);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getAllUserMessages = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const messages = await prisma.user.findUnique({
            where: {
                id: id,
            },
            include: {
                message: true,
            },
        });
        res.status(200).json(messages);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getForumMessageById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const message = await prisma.message.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(message);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createForumMessage = async (req: Request, res: Response) => {
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

const deleteForumMessageById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const deleteForumMessage = await prisma.message.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(deleteForumMessage);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllForumMessages, getAllUserMessages, createForumMessage, getForumMessageById, deleteForumMessageById}