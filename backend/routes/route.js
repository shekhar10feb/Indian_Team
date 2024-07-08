import { Router } from 'express';
// const getController = require('../controllers/controller.js');
import { getHello } from '../controllers/controller.js';

const router = Router();

router.get('/superhero', getHello);

export default router;
