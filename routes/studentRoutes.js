import express from 'express';

import { createStudent, getAllStudents, getStudentById, updateStudentById, deleteStudentById } from '../controllers/studentController.js';

const router = express.Router();

router.get('/students', getAllStudents);

router.get('/students/:id', getStudentById);

router.post('/students', createStudent);

router.patch('/students/:id', updateStudentById);

router.delete('/students/:id', deleteStudentById);

export default router;