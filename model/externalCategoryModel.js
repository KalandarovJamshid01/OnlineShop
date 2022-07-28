const mongoose = require("mongoose");

const externalCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const ExternalCategory = mongoose.model(
  "externalCategories",
  externalCategorySchema
);

module.exports = ExternalCategory;
