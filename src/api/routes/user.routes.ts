import express from 'express';
import {loginUser, createUser, getAllUsers, getUserById, updateUser, deleteUserById} from "../controllers/user.controller";
import verifyToken from '../middlewares/verifyToken';

// Variables
const router = express.Router();


router.post("/login", loginUser);
router.post("/create" , createUser);
router.get('/getAll', verifyToken, getAllUsers);
router.get('/getById/:id', verifyToken, getUserById);
router.patch('/update/:id', verifyToken, updateUser);
router.delete('/deleteById/:id', verifyToken, deleteUserById);

export default router;
