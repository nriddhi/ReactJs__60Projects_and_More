const router = require('express').Router();
const UserD = require('../models/users');

router.post('/login', async(req, res) => {

    const {username, password} = req.body;

    const findUser = await UserD.findOne({username: req.body.username});
    if(!findUser) { return res.status(404).json({msg: "Username Doesn't exist"}) }
     else { 
        
        res.cookie('CookieTest', 'cookie_value');
        return res.status(200).json({msg:"Logged in successfully"});
    
    }

});

router.post('/register', (req, res) => {

    try {
    const newuser = UserD.create(req.body);
    res.status(200).json({Msg: "User Created Successfully"});
    }
    catch (err) {
        res.status(500).json({Msg: err});
    }

})

module.exports = router;