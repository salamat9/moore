import express from 'express';
import get from '../services/buildings/get.js'

const router = express.Router();

router.get('/', get);

export default router;
