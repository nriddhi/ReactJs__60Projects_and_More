const router = require("express").Router();
const authD = require("../models/AuthD");
const Token = require("../models/mailToken");
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
var emailValidator = require("email-validator");


const register = async (req, res) => {
  try {
    if (req.body && req.body.name && req.body.username && req.body.password) {
      const username = await authD.findOne({ username: req.body.username });
      if (username)
        return res.status(406).json({ code: "u406", err: "Username Taken" });

      const email = await authD.findOne({ email: req.body.email });
      if (email)
        return res
          .status(406)
          .json({ code: "e406", err: "Email Already Exists" });

      const salt = await bcrypt.genSalt(15);
      const hashedPass = await bcrypt.hash(req.body.password, salt);

      const newUser = new authD({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
      });

      const user = await newUser.save();

      const etoken = await new Token({
        userId: user._id,
        token: crypto.randomBytes(24).toString("hex"),
      }).save();

      const msg = "SignUp Verfication<nayeemriddhi.info>";
      const url = `${process.env.Client_URL}/users/${etoken.userId}/verify/${etoken.token}`;
      const htmlmsg = `<p>Please click the link for Verify your Email ${url} Thank you and regards</p>`;
      await sendEmail(user.email, msg, htmlmsg);

      res.status(200).json({ msg: "success" });
    } else {
      return res
        .status(400)
        .json({ code: "rqf400", msg: "Required fields are missing" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const login = async (req, res, next) => {
  
    try {
      if (emailValidator.validate(req.body.userData)) {
        const email = await authD.findOne({ email: req.body.userData });
        if (!email)
          return res
            .status(404)
            .json({ code: "le404", msg: "Email not Registered" });
  
        const verified = await authD.findOne({ email: req.body.userData });
        if (!verified.verified)
          return res
            .status(404)
            .json({ code: "lv404", msg: "User not Verified" });
  
        const validated = await bcrypt.compare(req.body.password, email.password);
        if (!validated)
          return res
            .status(404)
            .json({ code: "lw404", msg: "Wrong credentials!" });
  
        const accessToken = jwt.sign(
          {
            uId: email._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "3500s",
          }
        );
  
        if (req.cookies["socialD_token"]) {
          req.cookies["socialD_token"] = "";
        }
  
        res.cookie("socialD_token", accessToken, {
          path: "/",
          httpOnly: true,
          sameSite: "lax",
          secure: false,
        });
  
        return res
          .status(200)
          .json({ message: "Logged In Successfully", code: "l200" });
      } else if (!emailValidator.validate(req.body.userData)) {
        const uname = await authD.findOne({ username: req.body.userData });
        if (!uname)
          return res
            .status(404)
            .json({ code: "lu404", msg: "Username Not Found" });
  
        const verified = await authD.findOne({ username: req.body.userData });
        if (!verified.verified) {
          const etoken = await new Token({
            userId: verified._id,
            token: crypto.randomBytes(24).toString("hex"),
          }).save();
  
          const msg = "SignUp Verfication<nayeemriddhi.info>";
          const url = `${process.env.BASE_URL}/users/${etoken.userId}/verify/${etoken.token}`;
          const htmlmsg = `<p>Please click the link for Verify your Email ${url}Thank you and regards</p>`;
          await sendEmail(verified.email, msg, htmlmsg);
          return res
            .status(404)
            .json({ code: "lv404", msg: "User not Verified" });
        } else if (verified.verified) {
          const validated = await bcrypt.compare(
            req.body.password,
            verified.password
          );
          if (!validated)
            return res
              .status(404)
              .json({ code: "lw404", msg: "Wrong credentials!" });
  
          const accessToken = jwt.sign(
            {
              uId: verified._id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "3500s",
            }
          );
  
          if (req.cookies["socialD_token"]) {
            req.cookies["socialD_token"] = "";
          }
  
          res.cookie("socialD_token", accessToken, {
            path: "/",
            httpOnly: true,
            sameSite: "lax",
            secure: false,
          });
  
          res
            .status(200)
            .json({ message: "Logged In Successfully", code: "l200" });
        }
      } else {
        res.status(404).json("Not Found");
      }
    } catch (err) {
      res.status(500).json("Server Not Responding");
    }
  };

const token = async (req, res) => {
  try {
    const userId = await Token.findOne({ userId: req.body.param.id });
    if (!userId)
      return res.status(404).json({ code: "ui404", msg: "User ID not found" });

    const token = await Token.findOne({ token: req.body.param.token });
    if (!token)
      return res.status(404).json({ code: "t404", msg: "Token not found" });

    const values = await authD.findOne({ _id: req.body.param.id });

    if (userId && token && values?.verified === false) {
      await Token.deleteMany({ userId: token.userId });
      await authD.findByIdAndUpdate(values._id, { verified: true });
      return res.status(200).json({ code: "v200", msg: "User Verified" });
    } else {
      res.status(404).json({ code: "av201", msg: "Already Verified" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const resetPass = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(15);
    const updatepass = await bcrypt.hash(req.body.matchPwd, salt);
    const verfiedChk = await authD.findOne({ _id: req.body.rId });
    const rtoken = await Token.findOne({ token: req.body.rToken });

    if (rtoken && verfiedChk?.verified === true) {
      await authD.findByIdAndUpdate(req.body.rId, { password: updatepass });
      await Token.findByIdAndRemove(rtoken._id);
      res
        .status(200)
        .json({ code: "rtSuccess", message: "Password updated successfully" });
    } else if (rtoken && verfiedChk?.verified === false) {
      res
        .status(200)
        .json({ code: "notVerified", message: "User not verified" });
    } else {
      res.status(200).json({
        code: "rtExpired",
        message: "Token Expired or Password Updated Already",
      });
    }
  } catch (err) {
    res.status(500).json({ code: "rntvalid", message: "Request Not Valid" });
  }
};

const sendfEmail = async (req, res) => {
  try {
    const chkEmail = await authD.findOne({ email: req.body.fEmail });

    if (chkEmail && chkEmail?.verified == true) {
      const ftoken = await new Token({
        userId: chkEmail._id,
        token: crypto.randomBytes(24).toString("hex"),
      }).save();
      const msg = "Reset Password<nayeemriddhi.info>";
      const url = `${process.env.Client_URL}/users/${ftoken.userId}/reset/${ftoken.token}`;
      const htmlmsg = `<p>Please click the link for Reset your password ${url} Thank you and regards</p>`;
      await sendEmail(chkEmail.email, msg, htmlmsg);
      res
        .status(200)
        .json({ code: "rp200", msg: "Reset Password Email Sent successfully" });
    } else if (chkEmail && chkEmail?.verified == false) {
      const etoken = await new Token({
        userId: chkEmail._id,
        token: crypto.randomBytes(24).toString("hex"),
      }).save();
      const msg = "SignUp Verification<nayeemriddhi.info>";
      const url = `${process.env.Client_URL}/users/${etoken.userId}/verify/${etoken.token}`;
      const htmlmsg = `<p>Please click the link for Verify your Email ${url} Thank you and regards</p>`;
      await sendEmail(chkEmail.email, msg, htmlmsg);
      res.status(200).json({
        code: "sv200",
        msg: "SignUp Verification Email Sent successfully",
      });
    } else {
      res.status(404).json({ code: "nf404", msg: "Email Not Registered" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const verifyToken = (req, res, next) => {
  const token = req.cookies;
  console.log(token);
  if (!token) {
    return res.status(404).json({ code: "lo400", message: "No token found" });
  }
  jwt.verify(String(token), process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return res.status(400).json({ code: "lou400", message: "Invalid Token" });
    }
    req.uId = user.uId;
  });
  next();
};

const refreshToken = (req, res, next) => {
  const cookieToken = req.cookies.socialD_token;
  if (!cookieToken) {
    return res
      .status(400)
      .json({ code: "lo400", message: "Couldn't find token" });
  }
  jwt.verify(String(cookieToken), process.env.JWT_SECRET, (err, user) => {
    if (err) {
      res.clearCookie("socialD_token");
      return res
        .status(403)
        .json({ code: "lou400", message: "Authentication failed" });
    }
    res.clearCookie("socialD_token");

    const token = jwt.sign({ uId: user.uId }, process.env.JWT_SECRET, {
      expiresIn: "3500s",
    });

    res.cookie("socialD_token", token, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      //secure:false
    });

    req.uId = user.uId;
    next();
  });
};

const getUser = async (req, res, next) => {
  const userId = req.uId;
  let user;
  try {
    user = await authD.findById({ _id: userId });
  } catch (error) {
    return new Error(error);
  }
  if (!user) {
    return res
      .status(400)
      .json({ code: "lo400", message: "Logout && No User with this id" });
  } else {
    return res.status(200).json({ code: "lpr200", msg: "Login persist" });
  }
};

const logout = (req, res, next) => {
  const token = req.cookies.socialD_token;
  if (!token) {
    return res.status(400).json({ message: "Couldn't find token" });
  }
  jwt.verify(String(token), process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Authentication failed" });
    }
    res.clearCookie("socialD_token");
    req.cookies["socialD_token"] = "";
    return res
      .status(200)
      .json({ code: "logoutscs200", message: "Successfully Logged Out" });
  });
};

exports.register = register;
exports.token = token;
exports.resetPass = resetPass;
exports.sendfEmail = sendfEmail;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
exports.refreshToken = refreshToken;
exports.logout = logout;
exports.login = login;
