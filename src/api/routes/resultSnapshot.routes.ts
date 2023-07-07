import express from 'express';
import { createResultSnapshot ,getResultSnapshotById, getAllResultSnapshot, updateResultSnapshot, deleteResultSnapshotById } from '../controllers/resultSnapshot.controller';

// Variables
const router = express.Router();

// Create a new course
router.post("/create", createResultSnapshot)

// Get all courses
router.get('/getAll', getAllResultSnapshot)

// Get course by id
router.get('/getById/:id', getResultSnapshotById)

// Update course
router.patch('/update/:id', updateResultSnapshot)

// Delete course
router.delete('/deleteById/:id', deleteResultSnapshotById)

export default router;
