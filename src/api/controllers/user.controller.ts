import {Request, Response} from 'express';

import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();


const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getUserById = async (req: Request<{ id: string }>, res: Response) => {
    const {id} = req.params
    try {
        const parsedId = parseInt(id, 10);
        const user = await prisma.user.findUnique({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(user);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createUser = async (req: Request, res: Response) => {
    const {firstname, lastname, email, password} = req.body || {};
    if (!email) {
        return res.status(400).json({error: 'firstname, lastname, email and password are required'});
    }
    try {
        const user = await prisma.user.create({
            data: {firstname, lastname, email, password},
        });
        res.status(201).json(user);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const updateUser = async (req: Request, res: Response) => {
    const {firstname, lastname, email} = req.body || {};
    const {id} = req.params
    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const updateUser = await prisma.user.update({
            where: {
                id: parsedId
            },
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
            }
        })
        res.status(200).json(updateUser);

    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

// DELETE USER BY ID
const deleteUserById = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const parsedId = parseInt(id, 10);
        const deleteUser = await prisma.user.delete({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(deleteUser);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllUsers, createUser, getUserById, updateUser, deleteUserById}