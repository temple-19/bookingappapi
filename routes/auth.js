import express from 'express';
import { login, register } from '../controllers/auth.js';

const router = express.Router();

router.post('https://chipper-pie-6f9780.netlify.app/register', register);
router.post('https://chipper-pie-6f9780.netlify.app/login', login);
router.post('/register', register);
router.post('/login', login);

export default router;
