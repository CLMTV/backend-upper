import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllBan = async (req: Request, res: Response) => {
    try {
        const ban = await prisma.ban.findMany();
        res.status(200).json(ban);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getBanById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const ban = await prisma.ban.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(ban);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createBan = async (req: Request, res: Response) => {
    const {description, date_end, userId} = req.body || {};
    if (!description) {
        return res.status(400).json({error: 'description is required'});
    }
    try {
        const ban = await prisma.ban.create({
            data: {description, date_end, userId},
        });
        res.status(201).json(ban);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateBan = async (req: Request, res: Response) => {
    const {id, description, date_start, date_end, userId} = req.body || {};
    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const updateBan = await prisma.ban.update({
            where: {
                id: id
            },
            data: {
                description: description, 
                date_start: date_start, 
                date_end: date_end, 
                userId: userId
            }
        })
        res.status(200).json(updateBan);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}


const deleteBanById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const deleteban = await prisma.ban.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(deleteban);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllBan, deleteBanById, getBanById, createBan, updateBan}