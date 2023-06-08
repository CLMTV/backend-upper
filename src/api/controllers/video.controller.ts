import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllVideos = async (req: Request, res: Response) => {
    try {
        const video = await prisma.video.findMany();
        res.status(200).json(video);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getVideoById = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const parsedId = parseInt(id, 10);
        const video = await prisma.video.findUnique({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(video);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createVideo = async (req: Request, res: Response) => {
    const {link} = req.body || {};
    if (!link) {
        return res.status(400).json({error: 'link is required'});
    }
    try {
        const video = await prisma.video.create({
            data: {link},
        });
        res.status(201).json(video);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateVideo = async (req: Request, res: Response) => {
    const {link} = req.body || {};
     const {id} = req.params;
    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const updatevideo = await prisma.video.update({
            where: {
                id: parsedId
            },
            data: {
                link: link,
            }
        })
        res.status(200).json(updatevideo);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}


const deleteVideoById = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const parsedId = parseInt(id, 10);
        const deleteVideo = await prisma.video.delete({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(deleteVideo);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllVideos, deleteVideoById, getVideoById, createVideo, updateVideo}