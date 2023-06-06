import express from 'express';
import {createMessageReaction, getAllMessageReactions, getMessageReactionById, updateMessageReaction, deleteMessageReactionById} from "../controllers/messageReaction.controller";

// Variables
const router = express.Router();


// Create a new section
router.post("/create" , createMessageReaction)

// Get all sections
router.get('/getAll', getAllMessageReactions)

// Get section by id
router.get('/getById', getMessageReactionById)

// Update section
router.patch('/update', updateMessageReaction)

// Delete section
router.delete('/deleteById', deleteMessageReactionById)


export default router;
