const User = require("./../model/userModel");
const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllUsers = (req, res, next) => {
  getAll(req, res, next, User);
};
const getOneUser = (req, res, next) => {
  getOne(req, res, next, User);
};

const addUser = (req, res, next) => {
  add(req, res, next, User);
};
const updateUser = (req, res, next) => {
  update(req, res, next, User);
};
const deleteUser = (req, res, next) => {
  deleteData(req, res, next, User);
};

module.exports = {
  getAllUsers,
  getOneUser,
  addUser,
  updateUser,
  deleteUser,
};
