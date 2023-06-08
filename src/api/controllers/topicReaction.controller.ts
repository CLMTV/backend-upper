import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


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
    const {is_liked, is_flagged, userId, messageId} = req.body || {};

    try {
        const topic_reaction = await prisma.topic_reaction.create({
            data: {is_liked, is_flagged, userId, messageId},
        });
        res.status(201).json(topic_reaction);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateTopicReaction = async (req: Request, res: Response) => {
    const {is_liked, is_flagged, userId, messageId} = req.body || {};
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
                is_liked: is_liked,
                is_flagged: is_flagged,
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

export {createTopicReaction, getTopicReactionById, updateTopicReaction, deleteTopicReactionById}