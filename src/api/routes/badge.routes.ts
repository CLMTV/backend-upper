import express from 'express';
import { getAllBadges, createBadge, getBadgeById, updateBadge, deleteBadgeById } from '../controllers/badge.controller';

// Variables
const router = express.Router();

// Create a new course
router.post("/create", createBadge)

// Get all courses
router.get('/getAll', getAllBadges)

// Get course by id
router.get('/getById/:is', getBadgeById)

// Update course
router.patch('/update/:id', updateBadge)

// Delete course
router.delete('/deleteById/:id', deleteBadgeById)

export default router;
