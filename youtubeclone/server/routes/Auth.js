import express from 'express';

import { signup, signin, googlesign  } from '../controllers/Auth.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', googlesign);

export default router;