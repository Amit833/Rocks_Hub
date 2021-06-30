const User = require("../models/User");
const customError = require("../helpers/customError");
const bcrypt = require("bcryptjs");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });

    if (!userFound) return next(customError("user not found!", 401));
    console.log("userFoundddddd", userFound);

    //now compare hashed password
    const passwordMatched = bcrypt.compareSync(password, userFound.password);
    if (!passwordMatched) {
      return next(customError("Invalid Credentials!", 401));
    }

    // if password matched Generate a token
    const token = userFound.generateAuthToken();

    // put the token in the response
    res
      .cookie("token", token, {
        expires: new Date(Date.now() + 604800000),
        sameSite: process.env.NODE_ENV == "production" ? "None" : "lax",
        secure: process.env.NODE_ENV == "production" ? true : false, //http on localhost, https on production
        httpOnly: true,
      })
      .json(userFound);
  } catch (error) {
    next(customError("login failed!", 401));
  }
};

exports.logout = (req, res, next) => {
  try {
    console.log("req.user=>", req.user);
    res.clearCookie("token");
    res.json("you successfully loggedout!");
  } catch (error) {
    next(customError("can not be logout!", 401));
  }
};
