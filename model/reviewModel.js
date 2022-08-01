const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: true,
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "products",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);




const Review = mongoose.model("reviews", reviewSchema);

module.exports = Review;
