import express from 'express';
import authenticate from '../middlewares/auth.js';
import BuildingRoutes from './buildings.js';
import ApartmentRoutes from './apartments.js';
import ManagerRoutes from './managers.js';
import AuthRoutes from './auth.js'

const router = express.Router();

router.use('/buildings', authenticate, BuildingRoutes);
router.use('/apartments', authenticate, ApartmentRoutes);
router.use('/managers', authenticate, ManagerRoutes);
router.use('/auth', AuthRoutes);

export default router;
