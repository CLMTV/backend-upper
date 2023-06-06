import express from 'express';
import {createTopicReaction, getAllTopicReactions, getTopicReactionById, updateTopicReaction, deleteTopicReactionById} from "../controllers/topicReaction.controller";

// Variables
const router = express.Router();


// Create a new topic reaction
router.post('/create' , createTopicReaction)

// Get all topic reactions
router.get('/getAll', getAllTopicReactions)

// Get topic reaction by id
router.get('/getById/:id', getTopicReactionById)

// Update topic reaction
router.patch('/update/:id', updateTopicReaction)

// Delete topic reaction
router.delete('/deleteById/:id', deleteTopicReactionById)


export default router;
