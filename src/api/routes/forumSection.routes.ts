import express from 'express';
import {createSection, getAllSections, getSectionById, updateSection, deleteSectionById} from "../controllers/forumSection.controller";

// Variables
const router = express.Router();


// Create a new section
router.post("/create" , createSection)

// Get all sections
router.get('/getAll', getAllSections)

// Get section by id
router.get('/getById', getSectionById)

// Update section
router.patch('/update', updateSection)

// Delete section
router.delete('/deleteById', deleteSectionById)


export default router;
