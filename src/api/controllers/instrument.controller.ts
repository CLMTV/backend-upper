import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL INSTRUMENTS
const getAllInstruments = async (req: Request, res: Response) => {
    try {
        const instruments = await prisma.instrument.findMany();
        res.status(200).json(instruments);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}


// GET INSTRUMENT BY ID
const getInstrumentById = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const parsedId = parseInt(id, 10);
        const instrument = await prisma.instrument.findUnique({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(instrument);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

// CREATE INSTRUMENT
const createInstrument = async (req: Request, res: Response) => {
    const {name, id_category} = req.body || {};
    if (!name) {
        return res.status(400).json({error: 'name is required'});
    }
    try {
        const instrument = await prisma.instrument.create({
            data: {name, id_category},
        });
        res.status(201).json(instrument);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

// UPDATE INSTRUMENT
const updateInstrument = async (req: Request, res: Response) => {
    const {name} = req.body || {};
    const {id} = req.params

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const updateInstrument = await prisma.instrument.update({
            where: {
                id: parsedId
            },
            data: {
                name: name
            }
        })
        res.status(200).json(updateInstrument);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

// DELETE INSTRUMENT BY ID
const deleteInstrumentById = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const parsedId = parseInt(id, 10);
        const deleteInstrument = await prisma.instrument.delete({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(deleteInstrument);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {createInstrument, getAllInstruments, getInstrumentById, updateInstrument, deleteInstrumentById}