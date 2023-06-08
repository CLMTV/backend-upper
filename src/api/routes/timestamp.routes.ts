import express from 'express';
import { createTimestamp, getAllTimestamp, getTimestampById, updateTimestamp, deleteTimestampById } from '../controllers/timestamp.controller';

// Variables
const router = express.Router();

// Create a new course
router.post("/create", createTimestamp)

// Get all courses
router.get('/getAll', getAllTimestamp)

// Get course by id
router.get('/getById/:id', getTimestampById)

// Update course
router.patch('/update/:id', updateTimestamp)

// Delete course
router.delete('/deleteById/:id', deleteTimestampById)

export default router;
