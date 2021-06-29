const jwt = require("jsonwebtoken");
const customError = require("../helpers/customError");
const env = require("../config/config");

exports.auth = async (req, next) => {
  try {
    // Grab the cookie/token from the request
    const token = req.cookies.token;

    // Validate the cookie and look for the user with that _id
    const verifyUser = jwt.verify(token, env.jwt_key);

    // if the token is corrupted, then throw an error
    if (!verifyUser) next(customError("User was not found"));

    // if the token is valid
    req.user = verifyUser;
    next();
  } catch (error) {
    next(customError("can not verify!", 401));
  }
};
