import express from 'express';
import {createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategoryById} from "../controllers/categories.controller";
// Variables
const router = express.Router();


// Create a new user
router.post('/create', createCategory)

// Get all users
router.get('/getAll', getAllCategories)

// Get user by id
router.get('/getById/:id', getCategoryById)

// Update category
router.patch('/update/:id', updateCategory)

// Delete categoryById
router.delete('/deleteById/:id', deleteCategoryById)
export default router;
