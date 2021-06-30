const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const env = require("../config/config");

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    emailIsVerified: { type: Boolean, default: false },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// Hashing data before saving into database
UserSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  } catch (err) {
    return next(err);
  }
});

// Hashing data before updating into database
UserSchema.pre("findOneAndUpdate", async function (next) {
  try {
    if (this._update.password) {
      this._update.password = await bcrypt.hash(this._update.password, 10);
    }
    next();
  } catch (err) {
    return next(err);
  }
});

// Generate token method
UserSchema.methods.generateAuthToken = function () {
  console.log(this); // user
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, env.jwt_key).toString();

  return token;
};

// Generate token method
UserSchema.methods.generateEmailVerifToken = function () {
  const user = this;
  // additionally making sure, the JWT ticket itself will expire at some point (in this case in 3 hours)
  const token = jwt
    .sign({ _id: user._id.toString(), email: user.email }, env.jwt_key, {
      expiresIn: "120h",
    })
    .toString();

  return token;
};

// Find By verif Token(decoded the emailveriftoken)
UserSchema.statics.findByVerifToken = function (token) {
  const User = this;

  // Decode the token
  try {
    let decoded = jwt.verify(token, env.jwt_key);
    console.log(`decoded`, decoded);
    return User.findOne({ _id: decoded._id, email: decoded.email });
  } catch (error) {
    return;
  }
};

const User = model("User", UserSchema);
module.exports = User;
