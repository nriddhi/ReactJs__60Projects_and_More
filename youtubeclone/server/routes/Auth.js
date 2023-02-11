const express = require('express');
const passport = require('passport');
const jwt = require("jsonwebtoken");
const { signup, signin } = require('../controllers/Auth.js');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

router.get('/google',
passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback', passport.authenticate('google', {
failureRedirect: "/",
  }), function(req,res){

    const accessToken = jwt.sign({
      uId : req.user._id
   }, process.env.JWT_SECRET, {
     expiresIn: "3500s",
   });

   if (req.cookies['vtube_token']) {
     req.cookies['vtube_token'] = "";
   }
   
   res.cookie('vtube_token', accessToken, {
     path: "/",
     httpOnly: true,
     sameSite: "lax",
   });
    
    res.redirect(process.env.BASE_URL);

  });


module.exports = router;