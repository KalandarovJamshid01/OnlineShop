const mongoose = require("mongoose");
const validator = require("validator");
const orderedUserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
  phone: {
    type: Number,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  cartId: {
    type: mongoose.Schema.ObjectId,
    ref: "carts",
  },
});

const OrderedUser = mongoose.model("orderedUsers", orderedUserSchema);

module.exports = OrderedUser;
