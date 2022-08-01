const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: true,
  },
});

const Service = mongoose.model("services", serviceSchema);

module.exports = Service;
