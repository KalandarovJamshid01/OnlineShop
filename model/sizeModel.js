const mongoose = require("mongoose");

const sizeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Size = mongoose.model("sizes", sizeSchema);

module.exports = Size;
