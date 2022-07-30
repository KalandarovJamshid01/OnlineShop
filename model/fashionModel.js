const mongoose = require("mongoose");

const fashionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
});

const Fashion = mongoose.model("fashions", fashionSchema);

module.exports = Fashion;
