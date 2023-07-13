import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllPlan = async (req: Request, res: Response) => {
    try {
        const plan = await prisma.plan.findMany({
            include: {
                user: true,
            }
        });
        res.status(200).json(plan);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getPlanById = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const plan = await prisma.plan.findUnique({
            include: {
                user: true,
            },
            where: {
                id: parsedId
            }
        });
        res.status(200).json(plan);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createPlan = async (req: Request, res: Response) => {
    const {name, description, price} = req.body || {};

    try {
        const plan = await prisma.plan.create({
            data: {name, description, price},
        });
        res.status(201).json(plan);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updatePlan = async (req: Request, res: Response) => {
    const {name, description, price} = req.body || {};
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const updateplan = await prisma.plan.update({
            where: {
                id: parsedId
            },
            data: {
                name: name,
                description: description, 
                price: price
            }
        })
        res.status(200).json(updateplan);

    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const deletePlanById = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const deleteplan = await prisma.plan.delete({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(deleteplan);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllPlan, createPlan, getPlanById, updatePlan, deletePlanById}