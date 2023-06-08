import express from 'express';
import { getAllCourses, deleteCourseById, getCourseById, createCourse, updateCourse} from '../controllers/course.controller';

// Variables
const router = express.Router();

// Create a new course
router.post("/create", createCourse)

// Get all courses
router.get('/getAll', getAllCourses)

// Get course by id
router.get('/getById/:id', getCourseById)

// Update course
router.patch('/update/:id', updateCourse)

// Delete course
router.delete('/deleteById/:id', deleteCourseById)

export default router;
