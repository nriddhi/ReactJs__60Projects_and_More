const User = require("../models/User");

exports.validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
};
exports.validateLength = (password) => {
  return String(password)
    .match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/);
};

exports.validateUsername = async (username) => {

  return String(username)
    .match(/^[A-z][A-z0-9-_]{3,23}$/);

};
