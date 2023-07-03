import express from 'express';
import { getAllPlan, createPlan, getPlanById, updatePlan, deletePlanById } from '../controllers/plan.controller';

// Variables
const router = express.Router();

// Create a new course
router.post("/create", createPlan)

// Get all courses
router.get('/getAll', getAllPlan)

// Get course by id
router.get('/getById/:id', getPlanById)

// Update course
router.patch('/update/:id', updatePlan)

// Delete course
router.delete('/deleteById/:id', deletePlanById)

export default router;
