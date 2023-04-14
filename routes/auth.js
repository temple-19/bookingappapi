import express from 'express';
import { login, register } from '../controllers/auth.js';

const router = express.Router();

router.get('/login', rest)
router.post('/register', register);
router.post('/login', login);


export default router;
