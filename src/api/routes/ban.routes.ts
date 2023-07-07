import express from 'express';
import { getAllBan, getBanById, createBan, updateBan, deleteBanById } from '../controllers/ban.controller';

// Variables
const router = express.Router();

// Create a new course
router.post("/create", createBan)

// Get all courses
router.get('/getAll', getAllBan)

// Get course by id
router.get('/getById/:id', getBanById)

// Update course
router.patch('/update/:id', updateBan)

// Delete course
router.delete('/deleteById/:id', deleteBanById)

export default router;
