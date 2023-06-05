import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllBadges = async (req: Request, res: Response) => {
    try {
        const bagde = await prisma.bagde.findMany();
        res.status(200).json(bagde);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getBadgeById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const bagde = await prisma.bagde.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(bagde);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createBadge = async (req: Request, res: Response) => {
    const {name, description, points, display_img, course} = req.body || {};
    if (!name) {
        return res.status(400).json({error: 'name is required'});
    }
    try {
        const bagde = await prisma.bagde.create({
            data: {name, description, points, display_img, course},
        });
        res.status(201).json(bagde);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateBadge = async (req: Request, res: Response) => {
    const {id, name, description, points, display_img} = req.body || {};
    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const updatebagde = await prisma.bagde.update({
            where: {
                id: id
            },
            data: {
                name: name,
                description: description, 
                points: points, 
                display_img: display_img
            }
        })
        res.status(200).json(updatebagde);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}


const deleteBadgeById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const deletebagde = await prisma.bagde.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(deletebagde);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllBadges, deleteBadgeById, getBadgeById, createBadge, updateBadge}