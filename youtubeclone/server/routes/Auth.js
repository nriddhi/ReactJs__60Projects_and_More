
const express = require('express');
const passport = require('passport');
const { signup, signin } = require('../controllers/Auth.js');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

router.get('/google',
passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback', passport.authenticate('google', {
failureRedirect: "/",
  }), function(req,res, next){

    res.status(200).json(req.user.username);

  });


module.exports = router;