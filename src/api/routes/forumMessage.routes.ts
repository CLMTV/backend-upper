import express from 'express';
import {createForumMessage, getAllForumMessages, getForumMessageById, deleteForumMessageById} from "../controllers/forumMessage.controller";

// Variables
const router = express.Router();


// Create a new forumMessage
router.post("/create" , createForumMessage)

// Get all forumMessages
router.get('/getAll', getAllForumMessages)

// Get forumMessage by id
router.get('/getById/:id', getForumMessageById)

// Delete forumMessage
router.delete('/deleteById/:id', deleteForumMessageById)


export default router;
