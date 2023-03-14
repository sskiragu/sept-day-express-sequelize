import express from 'express';

import { createStudentCourseRole, getAllStudentCourses, getStudentCourseById, updateStudentCourseById, deleteStudentCourseById } from '../controllers/studentCourseController.js';

const router = express.Router();

router.get('/student-course', getAllStudentCourses);

router.get('/student-course/:id', getStudentCourseById);

router.post('/student-course', createStudentCourseRole);

router.patch('/students/:students_id/courses/:courses_id', updateStudentCourseById);

router.delete('/students/:students_id/courses/:courses_id', deleteStudentCourseById);

export default router;