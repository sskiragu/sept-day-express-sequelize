import express from 'express';

import { createCourse, getAllCourses, getCourseById, updateCourseById, deleteCourseById } from '../controllers/courseController.js';

const router = express.Router();

router.get('/courses', getAllCourses);

router.get('/courses/:id', getCourseById);

router.post('/courses', createCourse);

router.patch('/courses/:id', updateCourseById);

router.delete('/courses/:id', deleteCourseById);

export default router;