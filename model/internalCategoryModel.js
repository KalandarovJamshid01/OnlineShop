const mongoose = require("mongoose");

const intCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  externalCategoryId: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "externalCategories",
  },
});

const intCategory = mongoose.model("internalCategories", intCategorySchema);

module.exports = intCategory;
