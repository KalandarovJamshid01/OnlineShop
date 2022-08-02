const OrderedUser=require("../model/orderedUsermodel")
const options = {
  path: "cartId",
  select: "userId productId",
};

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllOrderedUsers = (req, res, next) => {
  getAll(req, res, next, OrderedUser, options);
};
const getOneOrderedUser = (req, res, next) => {
  getOne(req, res, next, OrderedUser);
};
const addOrderedUser = (req, res, next) => {
  add(req, res, next, OrderedUser);
};
const updateOrderedUser = (req, res, next) => {
  update(req, res, next, OrderedUser);
};
const deleteOrderedUser = (req, res, next) => {
  deleteData(req, res, next, OrderedUser);
};

module.exports = {
  getAllOrderedUsers,
  getOneOrderedUser,
  addOrderedUser,
  updateOrderedUser,
  deleteOrderedUser,
};
