import express from 'express';
import {createInfo, getAllInfos, getInfoById, updateInfo, deleteInfoById} from "../controllers/info.controller";

// Variables
const router = express.Router();


// Create a new info
router.post("/create" , createInfo)

// Get all infos
router.get('/getAll', getAllInfos)

// Get info by id
router.get('/getById/:id', getInfoById)

// Update info
router.patch('/update/:id', updateInfo)

// Delete info
router.delete('/deleteById/:id', deleteInfoById)


export default router;
