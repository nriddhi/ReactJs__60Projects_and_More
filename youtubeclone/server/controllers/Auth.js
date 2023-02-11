const Users= require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {

    try {
        if(req.body && req.body.username && req.body.password)
        {
        const username = await Users.findOne({ username: req.body.username });
        if(username) return res.status(406).json({code:'u406',err: "Username Taken"});
    
        const email = await Users.findOne({ email: req.body.email });
        if(email) return res.status(406).json({code:'e406',err: "Email Already Exists"});
    
        const salt = await bcrypt.genSalt(15);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        
           const newUser = new Users({
            username : req.body.username,
            email : req.body.email,
            password : hashedPass
       });
    
        const user = await newUser.save();
    
      res.status(200).json({msg:'success'});
    
      } else {
        return res.status(400).json({code: 'rqf400', msg: 'Required fields are missing'},);
      }
          }
      catch (err)
          { res.status(500).json(err); }  
    
}

const signin = async(req, res) => {

    try {
          const username = await Users.findOne({ username: req.body.name });
          if(!username) return res.status(404).json({code:'le404',msg:'UserName not Registered'});
    
          const validated = await bcrypt.compare(req.body.password, username.password);
          if(!validated) return res.status(404).json({code:'lw404',msg:'Wrong credentials!'});
    
          const accessToken = jwt.sign({
             uId : username._id
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
            secure:false
          });
    
          return res
          .status(200)
          .json({ message: "Logged In Successfully", code:'ls200', username:username.username });
        }
    
      catch(err){
         res.status(500).json('Server Not Responding');
      }
    
    
}


const googlesign = (req, res) => {

    
}

exports.signup = signup;
exports.signin = signin;
exports.googlesign = googlesign;
