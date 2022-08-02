const mongoose = require("mongoose");

const externalCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Siz ismni kiritishingiz shart"],
    },
    photo: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

externalCategorySchema.virtual("internalCategories", {
  ref: "internalCategories",
  localField: "_id",
  foreignField: "externalCategoryId",
});
externalCategorySchema.virtual("products", {
  ref: "products",
  localField: "_id",
  foreignField: "externalCategoryId",
});

const ExternalCategory = mongoose.model(
  "externalCategories",
  externalCategorySchema
);

module.exports = ExternalCategory;
