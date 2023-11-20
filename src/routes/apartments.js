import express from 'express';
import create from '../services/apartments/create.js';
import get from '../services/apartments/get.js'
import update from '../services/apartments/update.js'
import remove from '../services/apartments/remove.js'

const router = express.Router();

router.get('/', get);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;