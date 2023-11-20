import express from "express";
import create from '../services/managers/create.js';
import get from '../services/managers/get.js'
import update from '../services/managers/update.js'
import remove from '../services/managers/remove.js'

const router = express.Router();

router.get('/', get);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
