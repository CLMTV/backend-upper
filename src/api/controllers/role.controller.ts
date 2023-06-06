import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


const getAllRoles = async (req: Request, res: Response) => {
    try {
        const roles = await prisma.role.findMany();
        res.status(200).json(roles);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getRoleById = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const role = await prisma.role.findUnique({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(role);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createRole = async (req: Request, res: Response) => {
    console.log(req.body)
    const {name} = req.body || {};

    try {
        const role = await prisma.role.create({
            data: {name},
        });
        res.status(201).json(role);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateRole = async (req: Request, res: Response) => {
    const {name} = req.body || {};
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const updateRole = await prisma.role.update({
            where: {
                id: parsedId
            },
            data: {
                name: name
            }
        })
        res.status(200).json(updateRole);

    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const deleteRoleById = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const deleteRole = await prisma.role.delete({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(deleteRole);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllRoles, createRole, getRoleById, updateRole, deleteRoleById}