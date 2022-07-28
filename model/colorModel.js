const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Color = mongoose.model("colors", colorSchema);
module.exports = Color;
