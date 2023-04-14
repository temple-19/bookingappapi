import express from 'express';
import path from 'path';
import { login, register } from '../controllers/auth.js';

const router = express.Router();

router.use(express.static(path.join(__dirname, 'build')));

// Serve the index.html file for all other routes
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
router.post('/register', register);
router.post('/login', login);
router.get('/login',(req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


export default router;
