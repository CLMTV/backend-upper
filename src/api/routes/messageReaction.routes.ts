import express from 'express';
import {createMessageReaction, getMessageReactionById, updateMessageReaction, deleteMessageReactionById} from "../controllers/messageReaction.controller";

// Variables
const router = express.Router();


// Create a new message reaction
router.post("/create" , createMessageReaction)

// Get message reaction by id
router.get('/getById/:id', getMessageReactionById)

// Update message reaction
router.patch('/update/:id', updateMessageReaction)

// Delete message reaction
router.delete('/deleteById/:id', deleteMessageReactionById)


export default router;
