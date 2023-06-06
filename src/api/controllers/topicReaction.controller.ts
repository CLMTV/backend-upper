import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


const getAllTopicReactions = async (req: Request, res: Response) => {
    try {
        const topic_reactions = await prisma.topic_reaction.findMany();
        res.status(200).json(topic_reactions);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getTopicReactionById = async (req: Request, res: Response) => {
    const {id} = req.params;

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const topic_reaction = await prisma.topic_reaction.findUnique({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(topic_reaction);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createTopicReaction = async (req: Request, res: Response) => {
    console.log(req.body)
    const {isLiked, isFlagged, userId, messageId} = req.body || {};

    try {
        const topic_reaction = await prisma.topic_reaction.create({
            data: {isLiked, isFlagged, userId, messageId},
        });
        res.status(201).json(topic_reaction);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateTopicReaction = async (req: Request, res: Response) => {
    const {isLiked, isFlagged, userId, messageId} = req.body || {};
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const updateTopicReaction = await prisma.topic_reaction.update({
            where: {
                id: parsedId
            },
            data: {
                isLiked: isLiked,
                isFlagged: isFlagged,
                userId: userId,
                messageId: messageId
            }
        })
        res.status(200).json(updateTopicReaction);

    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const deleteTopicReactionById = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const deleteTopicReaction = await prisma.topic_reaction.delete({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(deleteTopicReaction);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllTopicReactions, createTopicReaction, getTopicReactionById, updateTopicReaction, deleteTopicReactionById}