const Color = require("./../model/colorModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllColors = (req, res, next) => {
  getAll(req, res, next, Color);
};
const getOneColor = (req, res, next) => {
  getOne(req, res, next, Color);
};
const addColor = (req, res, next) => {
  add(req, res, next, Color);
};
const updateColor = (req, res, next) => {
  update(req, res, next, Color);
};
const deleteColor = (req, res, next) => {
  deleteData(req, res, next, Color);
};

module.exports = {
  getAllColors,
  getOneColor,
  addColor,
  updateColor,
  deleteColor,
};
