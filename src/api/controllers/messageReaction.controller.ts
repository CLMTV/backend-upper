import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


const getAllMessageReactions = async (req: Request, res: Response) => {
    try {
        const message_reactions = await prisma.message_reaction.findMany();
        res.status(200).json(message_reactions);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getMessageReactionById = async (req: Request, res: Response) => {
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

const createMessageReaction = async (req: Request, res: Response) => {
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

const updateMessageReaction = async (req: Request, res: Response) => {
    const {id, isLiked, isFlagged, userId, messageId} = req.body || {};

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const updateMessageReaction = await prisma.message_reaction.update({
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
        res.status(200).json(updateMessageReaction);

    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const deleteMessageReactionById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const deleteMessageReaction = await prisma.message_reaction.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(deleteMessageReaction);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllMessageReactions, createMessageReaction, getMessageReactionById, updateMessageReaction, deleteMessageReactionById}