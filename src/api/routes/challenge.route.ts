import express from 'express';
import {createChallenge, getAllChallenge, getChallengeById, updateChallenge, deleteChallengeById} from "../controllers/challenge.controller";
// Variables
const router = express.Router();


// Create a new user
router.post('/create', createChallenge)

// Get all users
router.get('/getAll', getAllChallenge)

// Get user by id
router.get('/getById/:id', getChallengeById)

// Update category
router.patch('/update/:id', updateChallenge)

// Delete categoryById
router.delete('/deleteById/:id', deleteChallengeById)
export default router;
