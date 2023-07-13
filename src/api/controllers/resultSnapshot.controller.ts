import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllResultSnapshot = async (req: Request, res: Response) => {
    try {
        const resultSnapshot = await prisma.results_snapshot.findMany({
            include: {
                challenge: true
            }
        });
        res.status(200).json(resultSnapshot);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getResultSnapshotById = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const resultSnapshot = await prisma.results_snapshot.findUnique({
            include: {
                challenge: true
            },
            where: {
                id: parsedId
            }
        });
        res.status(200).json(resultSnapshot);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createResultSnapshot = async (req: Request, res: Response) => {
    const {tiktok_username, tiktok_video, tiktok_likes, id_challenge} = req.body || {};

    try {
        const resultSnapshot = await prisma.results_snapshot.create({
            data: {tiktok_username, tiktok_video, tiktok_likes, id_challenge},
        });
        res.status(201).json(resultSnapshot);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateResultSnapshot = async (req: Request, res: Response) => {
    const {tiktok_username, tiktok_video, tiktok_likes, id_challenge} = req.body || {};
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const updateResultSnapshot = await prisma.results_snapshot.update({
            where: {
                id: parsedId
            },
            data: {
                tiktok_username: tiktok_username, 
                tiktok_video: tiktok_video, 
                tiktok_likes: tiktok_likes, 
                id_challenge: id_challenge
            }
        })
        res.status(200).json(updateResultSnapshot);

    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const deleteResultSnapshotById = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const deleteResultSnapshot = await prisma.results_snapshot.delete({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(deleteResultSnapshot);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllResultSnapshot, createResultSnapshot, getResultSnapshotById, updateResultSnapshot, deleteResultSnapshotById}