import express from 'express';
import { getAllCourses, deleteCourseById, getCourseById, createCourse, updateCourse} from '../controllers/course.controller';

// Variables
const router = express.Router();

// Create a new course
router.post('/create', createCourse)

// Get all courses
router.get('/getAll', getAllCourses)

// Get course by id
router.get('/getById', getCourseById)

// Update course
router.patch('/update', updateCourse)

// Delete course
router.delete('/deleteById', deleteCourseById)

export default router;
