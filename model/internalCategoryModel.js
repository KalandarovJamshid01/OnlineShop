const mongoose = require("mongoose");
const intCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    externalCategoryId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "externalCategories",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
intCategorySchema.virtual("products", {
  ref: "products",
  localField: "_id",
  foreignField: "internalCategoryId",
});

const intCategory = mongoose.model("internalCategories", intCategorySchema);

module.exports = intCategory;
