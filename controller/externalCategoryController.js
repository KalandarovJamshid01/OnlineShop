const ExternalCategory = require("./../model/externalCategoryModel");
const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const options = {
  path: "internalCategories",
  select: "name -externalCategoryId -_id",
};

const getAllExtCategory = (req, res, next) => {
  getAll(req, res, next, ExternalCategory, options);
};

const getOneExtCategory = (req, res, next) => {
  getOne(res, res, next, ExternalCategory);
};

const addExtCategory = (req, res, next) => {
  add(req, res, next, ExternalCategory);
};

const updateExtCategory = (req, res, next) => {
  update(req, res, next, ExternalCategory);
};
const deleteExtCategory = (req, res, next) => {
  deleteData(req, res, next, ExternalCategory);
};

module.exports = {
  getAllExtCategory,
  getOneExtCategory,
  addExtCategory,
  updateExtCategory,
  deleteExtCategory,
};
