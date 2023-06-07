import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllTimestamp = async (req: Request, res: Response) => {
    try {
        const timestamp = await prisma.timestamp.findMany();
        res.status(200).json(timestamp);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getTimestampById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const timestamp = await prisma.timestamp.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(timestamp);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createTimestamp = async (req: Request, res: Response) => {
    const {name, description, value, videoId} = req.body || {};
    if (!name) {
        return res.status(400).json({error: 'name is required'});
    }
    try {
        const timestamp = await prisma.timestamp.create({
            data: {name, description, value, videoId},
        });
        res.status(201).json(timestamp);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateTimestamp = async (req: Request, res: Response) => {
    const {id, name, description, value} = req.body || {};
    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const updateTimestamp = await prisma.timestamp.update({
            where: {
                id: id
            },
            data: {
                name: name,
                description: description, 
                value: value
            }
        })
        res.status(200).json(updateTimestamp);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}


const deleteTimestampById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const deleteTimestamp = await prisma.timestamp.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(deleteTimestamp);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllTimestamp, deleteTimestampById, getTimestampById, createTimestamp, updateTimestamp}