import express from 'express';
import { createVideo, getAllVideos, deleteVideoById, getVideoById, updateVideo } from '../controllers/video.controller';

// Variables
const router = express.Router();

// Create a new course
router.post("/create", createVideo)

// Get all courses
router.get('/getAll', getAllVideos)

// Get course by id
router.get('/getById/:id', getVideoById)

// Update course
router.patch('/update/:id', updateVideo)

// Delete course
router.delete('/deleteById/:id', deleteVideoById)

export default router;
