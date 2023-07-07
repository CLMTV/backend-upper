import express from 'express';
import { createMedia, updateMedia, getAllMedia, deleteMediaById, getMediaById } from '../controllers/media.controller';

// Variables
const router = express.Router();

// Create a new course
router.post("/create", createMedia)

// Get all courses
router.get('/getAll', getAllMedia)

// Get course by id
router.get('/getById/:id', getMediaById)

// Update course
router.patch('/update/:id', updateMedia)

// Delete course
router.delete('/deleteById/:id', deleteMediaById)

export default router;
