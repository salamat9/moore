import express from 'express';
import ApartmentRoutes from './apartments.js'

const router = express.Router();

router.use('/apartments', ApartmentRoutes);

export default router;
