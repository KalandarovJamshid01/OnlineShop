const Size = require("./../model/sizeModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllSizes = (req, res, next) => {
  getAll(req, res, next, Size);
};
const getOneSize = (req, res, next) => {
  getOne(req, res, next, Size);
};
const addSize = (req, res, next) => {
  add(req, res, next, Size);
};
const updateSize = (req, res, next) => {
  update(req, res, next, Size);
};
const deleteSize = (req, res, next) => {
  deleteData(req, res, next, Size);
};

module.exports = {
  getAllSizes,
  getOneSize,
  addSize,
  updateSize,
  deleteSize,
};
