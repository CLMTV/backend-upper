import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getUserById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(user);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createUser = async (req: Request, res: Response) => {
    console.log(req.body)
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
    const {id, firstname, lastname, email, password} = req.body || {};

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const updateUser = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            }
        })
        res.status(200).json(updateUser);

    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

// DELETE USER BY ID
const deleteUserById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const deleteUser = await prisma.user.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(deleteUser);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {getAllUsers, createUser, getUserById, updateUser, deleteUserById}