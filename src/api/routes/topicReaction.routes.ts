import express from 'express';
import {createTopicReaction, getAllTopicReactions, getTopicReactionById, updateTopicReaction, deleteTopicReactionById} from "../controllers/topicReaction.controller";

// Variables
const router = express.Router();


// Create a new section
router.post("/create" , createTopicReaction)

// Get all sections
router.get('/getAll', getAllTopicReactions)

// Get section by id
router.get('/getById/:id', getTopicReactionById)

// Update section
router.patch('/update/:id', updateTopicReaction)

// Delete section
router.delete('/deleteById/:id', deleteTopicReactionById)


export default router;
