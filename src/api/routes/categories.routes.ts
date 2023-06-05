import express from 'express';
import {createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategoryById} from "../controllers/categories.controller";
// Variables
const router = express.Router();


// Create a new user
router.post("/create", createCategory)

// Get all users
router.get('/getAll', getAllCategories)

// Get user by id
router.get('/getById', getCategoryById)

// Update category
router.patch('/update', updateCategory)

// Delete categoryById
router.delete('/deleteById', deleteCategoryById)
export default router;
