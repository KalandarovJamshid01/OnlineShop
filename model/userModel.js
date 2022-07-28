const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "To'g'ri passowrd kiriting"],
  },
  password: {
    type: String,
    required: true,
    // validate: [validator.isStrongPassword, "Kuchliroq password kiriting"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: true,
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: "Bir xil parol kiriting",
    },
  },
  photo: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  passwordChangedDate: { type: Date, default: null },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const hashPasword = await bcrypt.hash(this.password, 12);
  this.password = hashPasword;
  console.log(this.password);
  this.passwordConfirm = undefined;
  next();
});
const User = mongoose.model("users", userSchema);

module.exports = User;
