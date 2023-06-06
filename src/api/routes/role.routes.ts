import express from 'express';
import {createRole, getAllRoles, getRoleById, updateRole, deleteRoleById} from "../controllers/role.controller";

// Variables
const router = express.Router();


// Create a new message reaction
router.post('/create' , createRole)

// Get all message reactions
router.get('/getAll', getAllRoles)

// Get message reaction by id
router.get('/getById/:id', getRoleById)

// Update message reaction
router.patch('/update/:id', updateRole)

// Delete message reaction
router.delete('/deleteById/:id', deleteRoleById)


export default router;
