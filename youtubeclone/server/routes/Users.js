const router = require('express').Router();

const { test } = require('../controllers/Users.js');

router.post('/user', test);

module.exports = router;