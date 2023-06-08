import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


const getAllInfos = async (req: Request, res: Response) => {
    try {
        const infos_bulles = await prisma.infos_bulle.findMany();
        res.status(200).json(infos_bulles);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getInfoById = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const infos_bulle = await prisma.infos_bulle.findUnique({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(infos_bulle);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createInfo = async (req: Request, res: Response) => {
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

const updateInfo = async (req: Request, res: Response) => {
    const {name, icon, content, date_start, date_end} = req.body || {};
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const updateInfo = await prisma.infos_bulle.update({
            where: {
                id: parsedId
            },
            data: {
                name: name,
                icon: icon,
                content: content,
                date_start: date_start,
                date_end: date_end
            }
        })
        res.status(200).json(updateInfo);

    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const deleteInfoById = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const deleteInfo = await prisma.infos_bulle.delete({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(deleteInfo);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllInfos, createInfo, getInfoById, updateInfo, deleteInfoById}