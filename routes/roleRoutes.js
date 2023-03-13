import express from 'express';

import { createRole } from '../controllers/roleController.js';

const router = express.Router();

router.get('/roles', (req, res) => {

});

router.get('/roles/:id', (req, res) => {

});

router.post('/roles', createRole);

router.patch('/roles/:id', (req, res) => {

});

router.delete('/roles/:id', (req, res) => {

});

export default router;