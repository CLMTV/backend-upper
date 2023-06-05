import {Request, Response} from 'express';
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const helloUsers = (req: Request, res: Response) => {
    res.send('Hello user route');
}

const getAllUsers = async(req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

const createUser = async(req: Request, res: Response) => {
    console.log(req.body)
    const {email, name} = req.body || {};
    if (!email) {
        return res.status(400).json({error: 'Email is required'});
    }
    try {
        const user = await prisma.user.create({
            data: {email, name},
        });
        res.status(201).json(user);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {helloUsers, getAllUsers, createUser}