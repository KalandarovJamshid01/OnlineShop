const Review = require("./../model/reviewModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");
const options = {
  path: "userId",
  select: "name photo",
};
const options2 = {
  path: "productId",
  select: "name",
};
const getAllReview = (req, res, next) => {
  getAll(req, res, next, Review, options, options2);
};
const getOneReview = (req, res, next) => {
  getOne(req, res, next, Review);
};
const addReview = (req, res, next) => {
  add(req, res, next, Review);
};
const updateReview = (req, res, next) => {
  update(req, res, next, Review);
};
const deleteReview = (req, res, next) => {
  deleteData(req, res, next, Review);
};

module.exports = {
  getAllReview,
  getOneReview,
  addReview,
  updateReview,
  deleteReview,
};
