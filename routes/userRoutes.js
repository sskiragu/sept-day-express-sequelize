import express from 'express';

import { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } from '../controllers/userController.js';

const router = express.Router();

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.post('/users', createUser);

router.patch('/users/:id', updateUserById);

router.delete('/users/:id', deleteUserById);

export default router;