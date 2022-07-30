const {catchErrorAsync }= require("./../utility/catchErrorAsync");
const AppError = require("./../utility/AppError");
const Product = require("./../model/productModel");
const Review = require("./../model/reviewModel");
const ExternalCategory = require("./../model/externalCategoryModel");
const InternalCategory = require("./../model/internalCategoryModel");

const home = catchErrorAsync(async (req, res, next) => {
  res.render("base");
});

module.exports = { home };
