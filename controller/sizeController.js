const Size = require("./../model/sizeModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllSizes = (req, res, next) => {
  getAll(req, res, next);
};
const getOneSize = (req, res, next) => {
  getOne(req, res, next);
};
const addSize = (req, res, next) => {
  add(req, res, next);
};
const updateSize = (req, res, next) => {
  update(req, res, next);
};
const deleteSize = (req, res, next) => {
  deleteData(req, res, next);
};

module.exports = {
  getAllSizes,
  getOneSize,
  addSize,
  updateSize,
  deleteSize,
};
