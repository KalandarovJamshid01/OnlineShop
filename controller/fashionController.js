const Fashion = require("./../model/fashionModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllFashion = (req, res, next) => {
  getAll(req, res, next, Fashion);
};

const getOneFashion = (req, res, next) => {
  getOne(req, res, next, Fashion);
};

const addFashion = (req, res, next) => {
  add(req, res, next, Fashion);
};

const updateFashion = (req, res, next) => {
  update(req, res, next, Fashion);
};

const deleteFashion = (req, res, next) => {
  deleteData(req, res, next, Fashion);
};

module.exports = {
  getAllFashion,
  getOneFashion,
  addFashion,
  updateFashion,
  deleteFashion,
};
