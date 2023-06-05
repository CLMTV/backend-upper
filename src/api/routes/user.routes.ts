import express from 'express';
import {createUser, getAllUsers, helloUsers} from "../controllers/user.controller";

// Variables
const router = express.Router();


router.get('/', helloUsers)
// Create a new user
router.post("/create" , createUser)
// Get all users
router.get('/getAll', getAllUsers)


export default router;
