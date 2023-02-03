import express from 'express';

import { test } from '../controllers/Users.js';

const router = express.Router();

router.post('/user', test);

export default router;