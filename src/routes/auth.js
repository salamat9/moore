import express from 'express';
import login from '../services/auth/login.js';
import register from '../services/auth/register.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);

export default router;
