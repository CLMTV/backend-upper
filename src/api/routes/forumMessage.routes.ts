import express from 'express';
import {createForumMessage, getAllForumMessages, getAllUserMessages, getForumMessageById, deleteForumMessageById} from "../controllers/forumMessage.controller";

// Variables
const router = express.Router();


// Create a new forumMessage
router.post("/create" , createForumMessage)

// Get all forumMessages
router.get('/getAll', getAllForumMessages)

// Get all forumMessages
router.get('/getUserMessages', getAllUserMessages)

// Get forumMessage by id
router.get('/getById', getForumMessageById)

// Delete forumMessage
router.delete('/deleteById', deleteForumMessageById)


export default router;
