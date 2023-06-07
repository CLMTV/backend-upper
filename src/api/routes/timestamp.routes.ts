import express from 'express';
import { createTimestamp, getAllTimestamp, getTimestampById, updateTimestamp, deleteTimestampById } from '../controllers/timestamp.controller';

// Variables
const router = express.Router();

// Create a new course
router.post("/create", createTimestamp)

// Get all courses
router.get('/getAll', getAllTimestamp)

// Get course by id
router.get('/getById', getTimestampById)

// Update course
router.patch('/update', updateTimestamp)

// Delete course
router.delete('/deleteById', deleteTimestampById)

export default router;
