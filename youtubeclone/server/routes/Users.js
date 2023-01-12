import express from 'express';

import { test } from '../controllers/Users.js';

const router = express.Router();

router.get('/user', test);

export default router;