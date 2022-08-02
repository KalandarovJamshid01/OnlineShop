const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.ObjectId,
    ref: "products",
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
});

const Cart = mongoose.model("carts", cartSchema);
