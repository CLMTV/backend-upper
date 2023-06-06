import express from 'express';
import {createTopic, getAllTopics, getTopicById, deleteTopicById} from "../controllers/forumTopic.controller";

// Variables
const router = express.Router();


// Create a new topic
router.post("/create" , createTopic)

// Get all topics
router.get('/getAll', getAllTopics)

// Get topic by id
router.get('/getById/:id', getTopicById)

// Delete topic
router.delete('/deleteById/:id', deleteTopicById)


export default router;
