import express from 'express';
import {createUser, getAllUsers, getUserById, updateUser, deleteUserById} from "../controllers/user.controller";

// Variables
const router = express.Router();


// Create a new user
router.post("/create" , createUser)

// Get all users
router.get('/getAll', getAllUsers)

// Get user by id
router.get('/getById/:id', getUserById)

// Update user
router.patch('/update/:id', updateUser)

// Delete user
router.delete('/deleteById/:id', deleteUserById)


export default router;


