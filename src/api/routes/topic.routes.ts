import express from 'express';
import {createTopic, getAllUserTopics, getAllSectionTopics, getTopicById, deleteTopicById} from "../controllers/topic.controller";

// Variables
const router = express.Router();


// Create a new topic
router.post('/create' , createTopic)

// Get all topics by user
router.get('/getByUser/:id', getAllUserTopics)

// Get all topics by section
router.get('/getBySection/:id', getAllSectionTopics)

// Get topic by id
router.get('/getById/:id', getTopicById)

// Delete topic
router.delete('/deleteById/:id', deleteTopicById)


export default router;
