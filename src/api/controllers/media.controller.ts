import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllMedia = async (req: Request, res: Response) => {
    try {
        const media = await prisma.media.findMany({
            include: {
                lesson: true
            }
        });
        res.status(200).json(media);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getMediaById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const media = await prisma.media.findUnique({
            include: {
                lesson: true
            },
            where: {
                id: id
            }
        });
        res.status(200).json(media);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createMedia = async (req: Request, res: Response) => {
    const {file} = req.body || {};
    if (!file) {
        return res.status(400).json({error: 'file is required'});
    }
    try {
        const media = await prisma.media.create({
            data: {file},
        });
        res.status(201).json(media);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateMedia = async (req: Request, res: Response) => {
    const {id, file} = req.body || {};
    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const updateMedia = await prisma.media.update({
            where: {
                id: id
            },
            data: {
                file: file, 
            }
        })
        res.status(200).json(updateMedia);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}


const deleteMediaById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const deleteMedia = await prisma.media.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(deleteMedia);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllMedia, deleteMediaById, getMediaById, createMedia, updateMedia}