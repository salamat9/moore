import express from 'express';
import ApartmentRoutes from './apartments.js'
import ManagerRoutes from './managers.js'

const router = express.Router();

router.use('/apartments', ApartmentRoutes);
router.use('/managers', ManagerRoutes);

export default router;
