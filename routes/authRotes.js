import express from 'express';
import { validateRequest, signupSchema } from '../middlewares/validateRequest.js';

import { login, signup } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);

router.post('/signup', validateRequest(signupSchema), signup);

export default router;