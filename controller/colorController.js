const Color = require("./../model/colorModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllColors = (req, res, next) => {
  getAll(req, res, next);
};
const getOneColor = (req, res, next) => {
  getOne(req, res, next);
};
const addColor = (req, res, next) => {
  add(req, res, next);
};
const updateColor = (req, res, next) => {
  update(req, res, next);
};
const deleteColor = (req, res, next) => {
  deletedData(req, res, next);
};

module.exports = {
  getAllColors,
  getOneColor,
  addColor,
  updateColor,
  deleteColor,
};
