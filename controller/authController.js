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

const signIn = catchErrorAsync(async (req, res, next) => {
  const { email, password } = { ...req.body };
  if (!email || !password) {
    next(new AppError("Email va passwordni kriting", 404));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new AppError("Siz tizimga kirishingiz kerak", 404));
  }
  const tekshirHashga = async (oddiyPassword, hashPassword) => {
    const tekshir = await bcrypt.compare(oddiyPassword, hashPassword);
    return tekshir;
  };

  if (!(await tekshirHashga(password, user.password))) {
    return next(new AppError("Passwordni to'g'ri kririting", 404));
  }
  const token = createToken(user._id);
  saveTokenCookie(res, token);
  res.status(200).json({
    status: "Succes",
    token: token,
  });
});

const protect = catchErrorAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new AppError("Siz tizimga kirishingiz kerak"));
  }
  let tokenca = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(tokenca.id);

  if (!user) {
    return next(
      new AppError("Bunday user mavjud emas,iltimos ro'yxatdan o'ting")
    );
  }

  if (user.passwordChangedDate) {
    console.log(user.passwordChangedDate.getTime() / 1000);
    // console.log(tokencha.iat);
    if (user.passwordChangedDate.getTime() / 1000 > tokenca.iat) {
      return next(
        new AppError(
          "Sizning tokeningiz yaroqsiz! Iltimos qayta tizimga kiring!",
          401
        )
      );
    }
  }
  req.user = user;
  next();
});

const role = (roles) => {
  return catchErrorAsync(async (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError("Siz bu amaliyotni bajarishga huquqiz yoq"));
    }
    next();
  });
};

module.exports = {
  signup,
  signIn,
  protect,
  role,
};
