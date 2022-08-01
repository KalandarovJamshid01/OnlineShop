const { catchErrorAsync } = require("./../utility/catchErrorAsync");
const AppError = require("./../utility/AppError");
const Product = require("./../model/productModel");
const Review = require("./../model/reviewModel");
const ExternalCategory = require("./../model/externalCategoryModel");
const InternalCategory = require("./../model/internalCategoryModel");

const home = catchErrorAsync(async (req, res, next) => {
//   const data = await ExternalCategory.find();
  res.render("home", {
    data: "salom",
  });
});

module.exports = { home };
