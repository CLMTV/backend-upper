import express from 'express';
import {createInfosBulle, getAllInfosBulles, getInfosBulleById, updateInfosBulle, deleteInfosBulleById} from "../controllers/infosBulle.controller";

// Variables
const router = express.Router();


// Create a new infosBulle
router.post("/create" , createInfosBulle)

// Get all infosBulles
router.get('/getAll', getAllInfosBulles)

// Get infosBulle by id
router.get('/getById', getInfosBulleById)

// Update infosBulle
router.patch('/update', updateInfosBulle)

// Delete infosBulle
router.delete('/deleteById', deleteInfosBulleById)


export default router;
