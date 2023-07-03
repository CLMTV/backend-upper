import express from 'express';
import { createNote, getAllNotes, getNoteByIdLesson, getNoteByIdCourse, getNoteById, deleteNoteById, updateNote } from '../controllers/note.controller';

// Variables
const router = express.Router();

// Create a new note
router.post("/create" , createNote)

// Get all note 
router.get('/getAll', getAllNotes)

// Get note by id
router.get('/getById/:id', getNoteById)
// Get note by course id
router.get('/getById/:userId/:courseId', getNoteByIdCourse)
// Get note by lesson id
router.get('/getById/:userId/:courseId/:lessonId', getNoteByIdLesson)

// Update note
router.patch('/update/:id', updateNote)

// Delete note
router.delete('/deleteById/:id', deleteNoteById)


export default router;
