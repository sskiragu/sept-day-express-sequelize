import express from 'express';

import { createUserRole } from '../controllers/userRoleController.js';

const router = express.Router();

router.get('/user-role', (req, res) => {

});

router.get('/user-role/:id', (req, res) => {

});

router.post('/user-role', createUserRole);

router.patch('/user-role/:id', (req, res) => {

});

router.delete('/user-role/:id', (req, res) => {

});

export default router;