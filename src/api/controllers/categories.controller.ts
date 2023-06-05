import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL CATEGORIES
const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categories = await prisma.category.findMany();
        res.status(200).json(categories);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}


// GET CATEGORY BY ID
const getCategoryById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const category = await prisma.category.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(category);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

// CREATE CATEGORY
const createCategory = async (req: Request, res: Response) => {
    const {name} = req.body || {};
    if (!name) {
        return res.status(400).json({error: 'name is required'});
    }
    try {
        const user = await prisma.category.create({
            data: {name},
        });
        res.status(201).json(user);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

// UPDATE CATEGORY
const updateCategory = async (req: Request, res: Response) => {
    const {id, name, content} = req.body || {};

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const updateCategory = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                name: name,
                content: content
            }
        })
        res.status(200).json(updateCategory);

    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

// DELETE CATEGORY BY ID
const deleteCategoryById = async (req: Request, res: Response) => {
    const {id} = req.body
    try {
        const deleteCategory = await prisma.category.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(deleteCategory);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {createCategory, getCategoryById, getAllCategories, updateCategory, deleteCategoryById}