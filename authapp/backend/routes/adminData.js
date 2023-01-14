const authD = require('../models/AuthD');
const router = require('express').Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const getAdminUser = async (req, res, next) => {
    const cookieToken = req.cookies.ecom_token;
  
    if (!cookieToken) {
        return res.status(404).json({ code:'lo400', message: "No token found" });
      }
    jwt.verify(String(cookieToken), process.env.JWT_SECRET, async (error, user) => {
        if (error) {
          return res.status(400).json({code:'lou400', message: "Invalid Token" });
        }
        const userId = user.uId;
        const userDetails = await authD.findById(userId);  
     if(userDetails)
    {
        res.status(200).json({user:userDetails});
    }

      });
    
    
};

exports.getAdminUser = getAdminUser;