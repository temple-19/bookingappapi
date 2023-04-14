import express from 'express';
import { login, register } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('https://dark-frog-dungarees.cyclic.app/api/login', login);

export default router;
