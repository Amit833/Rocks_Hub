const User = require("../models/User");
const { sendVerificationEmail } = require("../mailer/setup.js");

exports.getUsers = async (req, res, next) => {
  const users = await User.find().sort({ firstName: 1 });
  res.send(users);
};

exports.getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const userUpdated = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log("updatedUserrrrr", userUpdated);
    res.json(userUpdated);
  } catch (err) {
    next(err);
  }
};

exports.addUser = async (req, res, next) => {
  const info = req.body;
  try {
    // const user = await User.create(info);
    const user = new User(info);

    // Generate a token
    const token = user.generateAuthToken();

    // Generate an email verification token
    const verifToken = user.generateEmailVerifToken();
    user.emailVerificationToken = verifToken;
    await user.save();

    // Send an email-verification email
    sendVerificationEmail(user);

    res
      .cookie("token", token, {
        expires: new Date(Date.now() + 604800000),
        sameSite: process.env.NODE_ENV == "production" ? "None" : "lax",
        secure: process.env.NODE_ENV == "production" ? true : false, //http on localhost, https on production
        httpOnly: true,
      })
      .send(user);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    let userDeleted = await User.findByIdAndDelete(id);
    if (!userDeleted) throw new Error();
    res.json(userDeleted);
  } catch (err) {
    let error = new Error(`User with ID ${id} does not exist`);
    error.status = 400;
    next(error);
  }
};

exports.verifyUserAccount = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.user._id,
      { emailIsVerified: true },
      { new: true }
    );
    res.json({ message: `Your user (${req.user.email}) has been validated.` });
  } catch (error) {
    next(error);
  }
};
