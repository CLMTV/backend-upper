import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


const getMessageReactionById = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const message_reaction = await prisma.message_reaction.findUnique({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(message_reaction);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createMessageReaction = async (req: Request, res: Response) => {
    console.log(req.body)
    const {is_liked, is_flagged, userId, messageId} = req.body || {};

    try {
        const message_reaction = await prisma.message_reaction.create({
            data: {is_liked, is_flagged, userId, messageId},
        });
        res.status(201).json(message_reaction);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateMessageReaction = async (req: Request, res: Response) => {
    const {isLiked, isFlagged, userId, messageId} = req.body || {};
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const updateMessageReaction = await prisma.message_reaction.update({
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
        res.status(200).json(updateMessageReaction);

    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const deleteMessageReactionById = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const deleteMessageReaction = await prisma.message_reaction.delete({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(deleteMessageReaction);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {createMessageReaction, getMessageReactionById, updateMessageReaction, deleteMessageReactionById}