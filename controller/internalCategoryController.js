const IntCategory = require("./../model/internalCategoryModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllIntCategories = (req, res, next) => {
  getAll(req, res, next, IntCategory);
};

const getOneIntCategory = (req, res, next) => {
  getOne(req, res, next, IntCategory);
};
const addIntCategory = (req, res, next) => {
  add(req, res, next, IntCategory);
};
const updateIntCategory = (req, res, next) => {
  update(req, res, next, IntCategory);
};
const deleteIntCategory = (req, res, next) => {
  deleteData(req, res, next, IntCategory);
};

module.exports = {
  getAllIntCategories,
  getOneIntCategory,
  addIntCategory,
  updateIntCategory,
  deleteIntCategory,
};
