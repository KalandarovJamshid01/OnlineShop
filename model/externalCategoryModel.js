const mongoose = require("mongoose");

const externalCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const ExternalCategory = mongoose.model(
  "externalCategory",
  externalCategorySchema
);

module.exports = ExternalCategory;
