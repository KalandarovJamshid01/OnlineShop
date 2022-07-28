const User = require("./../model/userModel");
const AppError = require("./../utility/AppError");
const { catchErrorAsync } = require("./../utility/catchErrorAsync");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};
if (process.env.NODE_ENV === "PRODUCTION") {
  cookieOptions.secure = true;
}

const saveTokenCookie = (res, token) => {
  res.cookie("jwt", token, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
};

const signup = catchErrorAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    photo: req.body.photo,
    passwordChangedDate: req.body.passwordChangedDate,
  });
  const token = createToken(newUser._id);

  saveTokenCookie(res, token);

  res.status(200).json({
    status: "Succes",
    token: token,
    data: newUser,
  });
});

module.exports = {
  signup,
};
