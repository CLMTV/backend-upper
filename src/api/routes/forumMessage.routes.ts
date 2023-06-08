import express from 'express';
import {createForumMessage, getAllForumMessages, getForumMessageById, deleteForumMessageById} from "../controllers/forumMessage.controller";

// Variables
const router = express.Router();


// Create a new message
router.post("/create" , createForumMessage)

// Get all messages
router.get('/getAll', getAllForumMessages)

// Get message by id
router.get('/getById/:id', getForumMessageById)

// Delete message
router.delete('/deleteById/:id', deleteForumMessageById)


export default router;
