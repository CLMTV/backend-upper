import {Request, Response} from 'express';

import {PrismaClient} from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();


const loginUser = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({error: 'Email and password are required'});
    }
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.status(400).json({error: 'Invalid email or password'});
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({error: 'Invalid email or password'});
        }

        const token = jwt.sign({userId: user.id},'secretkey');
        res.json({token});
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}



const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const getUserById = async (req: Request, res: Response) => {
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
    console.log(req.body)
    const {firstname, lastname, email, password} = req.body || {};
    if (!email) {
        return res.status(400).json({error: 'firstname, lastname, email and password are required'});
    }
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await prisma.user.create({
            data: {firstname, lastname, email, password: hashedPassword},
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

export {loginUser, getAllUsers, createUser, getUserById, updateUser, deleteUserById}