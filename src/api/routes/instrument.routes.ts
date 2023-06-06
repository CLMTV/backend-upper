import express from 'express';
import {
    createInstrument,
    getInstrumentById,
    getAllInstruments,
    deleteInstrumentById,
    updateInstrument
} from "../controllers/instrument.controller";

// Variables
const router = express.Router();


// Create a new user
router.post('/create', createInstrument)

// Get all users
router.get('/getAll', getAllInstruments)

// Get user by id
router.get('/getById/:id', getInstrumentById)

// Update category
router.patch('/update/:id', updateInstrument)

// Delete categoryById
router.delete('/deleteById/:id', deleteInstrumentById)


export default router;
