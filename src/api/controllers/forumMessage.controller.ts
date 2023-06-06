import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


const getAllForumMessages = async (req: Request, res: Response) => {
    try {
        const infos_bulles = await prisma.infos_bulle.findMany();
        res.status(200).json(infos_bulles);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getForumMessageById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const infos_bulle = await prisma.infos_bulle.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(infos_bulle);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createForumMessage = async (req: Request, res: Response) => {
    console.log(req.body)
    let {name, icon, content, date_start, date_end} = req.body || {};

    date_start = new Date(date_start);
    date_end = new Date(date_end);

    try {
        const infos_bulle = await prisma.infos_bulle.create({
            data: {name, icon, content, date_start, date_end},
        });
        res.status(201).json(infos_bulle);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const deleteForumMessageById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const deleteForumMessage = await prisma.infos_bulle.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(deleteForumMessage);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllForumMessages, createForumMessage, getForumMessageById, deleteForumMessageById}