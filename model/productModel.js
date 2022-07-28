const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  internalCategoryId: {
    type: mongoose.Schema.ObjectId,
    ref: "internalCategories",
  },
  externalCategoryId: {
    type: mongoose.Schema.ObjectId,
    ref: "externalCategories",
  },
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
