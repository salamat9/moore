import express from 'express';
import login from '../services/auth/login.js';
import register from '../services/auth/register.js';
import refreshToken from '../services/auth/refreshToken.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/refresh-token', refreshToken)

export default router;
