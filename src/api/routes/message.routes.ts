import express from 'express';
import {createMessage, getAllUserMessages, getAllTopicMessages, getMessageById, deleteMessageById} from "../controllers/message.controller";

// Variables
const router = express.Router();


// Create a new message
router.post("/create" , createMessage)

// Get all user messages
router.get('/getByUser/:id', getAllUserMessages)

// Get all topic messages
router.get('/getByTopic/:id', getAllTopicMessages)

// Get message by id
router.get('/getById/:id', getMessageById)

// Delete message
router.delete('/deleteById/:id', deleteMessageById)


export default router;
