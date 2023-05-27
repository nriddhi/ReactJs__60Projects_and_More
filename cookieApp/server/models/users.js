const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema(
  {

    username: {
      type: String,
      required:true,
      unique: true,
      index:true
    },

    password: {
      type: String,
      required:true
    }

  },
  { timestamps: true }
);

const UsersModel = mongoose.model("users", UserSchema);
module.exports = UsersModel;

