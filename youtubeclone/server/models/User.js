const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username : {
       type:String,
       required: true,
       unique: true
    },

    email : {
        type:String,
        required: true,
        unique: true
     },

     password : {
        type:String,
     },

     img : {
        type:String,
     },

     social_id : {
      type:String
     },

     subscribers : {
        type: Number,
        default: 0,
     },

     subscribedUser: {
        type: [String]
     }


}, {timestamps:true});

module.exports = mongoose.model('user', UserSchema);


