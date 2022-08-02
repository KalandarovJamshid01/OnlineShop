const Cart = require("./../model/cartModel");
const options = {
  path: "productId",
  select: "name price photo",
};
const options2 = {
  path: "userId",
  select: "_id name",
};

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllCarts = (req, res, next) => {
  getAll(req, res, next, Cart, options, options2);
};
const getOneCart = (req, res, next) => {
  getOne(req, res, next, Cart);
};
const addCart = (req, res, next) => {
  add(req, res, next, Cart);
};
const updateCart = (req, res, next) => {
  update(req, res, next, Cart);
};
const deleteCart = (req, res, next) => {
  deleteData(req, res, next, Cart);
};

module.exports = {
  getAllCarts,
  getOneCart,
  addCart,
  updateCart,
  deleteCart,
};
