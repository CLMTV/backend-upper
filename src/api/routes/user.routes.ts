import express from 'express';
import {
    loginUser,
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUserById,
    getUserIdFromToken,
    changePlanId
} from "../controllers/user.controller";
import verifyToken from '../middlewares/verifyToken';

// Variables
const router = express.Router();


router.post("/login", loginUser);
router.post("/create", createUser);
router.get('/getAll', verifyToken, getAllUsers);
router.get('/getById/:id', verifyToken, getUserById);
router.patch('/update/:id', verifyToken, updateUser);
router.delete('/deleteById/:id', verifyToken, deleteUserById);
router.get('/getUserFromToken', verifyToken, getUserIdFromToken);
router.patch('/changePlanId/:id', verifyToken, changePlanId)
export default router;
