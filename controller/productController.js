const Product = require("./../model/productModel");
const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

options = {
  path: "reviews",
};

const getAllProducts = (req, res, next) => {
  getAll(req, res, next, Product, options);
};

const getOneProduct = (req, res, next) => {
  getOne(req, res, next, Product);
};

const addProduct = (req, res, next) => {
  add(req, res, next, Product);
};

const updateProduct = (req, res, next) => {
  update(req, res, next, Product);
};
const deleteProduct = (req, res, next) => {
  deleteData(req, res, next, Product);
};

module.exports = {
  getAllProducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
