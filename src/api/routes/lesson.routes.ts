import express from 'express';
import { getAllLesson, createLesson, getLessonById, updateLesson, deleteLessonById } from '../controllers/lesson.controller';

// Variables
const router = express.Router();

// Create a new course
router.post("/create", createLesson)

// Get all courses
router.get('/getAll', getAllLesson)

// Get course by id
router.get(`/getById/:id`, getLessonById)

// Update course
router.patch('/update', updateLesson)

// Delete course
router.delete(`/deleteById/:id`, deleteLessonById)

export default router;
