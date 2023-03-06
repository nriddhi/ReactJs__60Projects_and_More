const router = require('express').Router();
const authD = require('../models/AuthD');
const Token = require('../models/mailToken');
const sendEmail = require('../utils/sendEmail');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const {register, token, resetPass, 
  sendfEmail, refreshToken, 
  getUser, login, logout} = require('./AuthController');

router.post('/register', register);
router.post('/token', token);
router.post('/resetPass', resetPass);
router.post('/sendfEmail', sendfEmail);

const cookieMiddle = (req, res, next) => {
  next();
};

router.get("/getuser", refreshToken, cookieMiddle);
router.get("/refresh", refreshToken, getUser);
router.post("/login", login );
router.post("/logout", logout);

module.exports = router;
