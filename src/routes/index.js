import express from 'express';
import authenticate from '../middlewares/auth.js';
import ApartmentRoutes from './apartments.js';
import ManagerRoutes from './managers.js';
import AuthRoutes from './auth.js'

const router = express.Router();

router.use('/apartments', authenticate, ApartmentRoutes);
router.use('/managers', authenticate, ManagerRoutes);
router.use('/auth', AuthRoutes);

export default router;
