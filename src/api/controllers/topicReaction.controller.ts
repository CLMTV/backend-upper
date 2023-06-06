import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


const getAllTopicReactions = async (req: Request, res: Response) => {
    try {
        const message_reactions = await prisma.message_reaction.findMany();
        res.status(200).json(message_reactions);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getTopicReactionById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const message_reaction = await prisma.message_reaction.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(message_reaction);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createTopicReaction = async (req: Request, res: Response) => {
    console.log(req.body)
    const {isLiked, isFlagged, userId, messageId} = req.body || {};

    try {
        const message_reaction = await prisma.message_reaction.create({
            data: {isLiked, isFlagged, userId, messageId},
        });
        res.status(201).json(message_reaction);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateTopicReaction = async (req: Request, res: Response) => {
    const {id, isLiked, isFlagged, userId, messageId} = req.body || {};

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const updateTopicReaction = await prisma.message_reaction.update({
            where: {
                id: id
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
    const {id} = req.body
    try {
        const deleteTopicReaction = await prisma.message_reaction.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(deleteTopicReaction);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllTopicReactions, createTopicReaction, getTopicReactionById, updateTopicReaction, deleteTopicReactionById}