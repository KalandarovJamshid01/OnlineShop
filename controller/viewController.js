const { catchErrorAsync } = require("./../utility/catchErrorAsync");
const AppError = require("./../utility/AppError");
const Product = require("./../model/productModel");
const Review = require("./../model/reviewModel");
const ExternalCategory = require("./../model/externalCategoryModel");
const InternalCategory = require("./../model/internalCategoryModel");
const Service = require("./../model/serviceModel");
const home = catchErrorAsync(async (req, res, next) => {
  const externalCategory = await ExternalCategory.find();
  const product = await Product.find();
  const review = await Review.find();
  const internalCategory = await InternalCategory.find();
  const service = await Service.find();
  res.render("home", {
    externalCategory: externalCategory,
  });
});

module.exports = { home };
