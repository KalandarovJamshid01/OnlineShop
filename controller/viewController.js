const { catchErrorAsync } = require("./../utility/catchErrorAsync");
const AppError = require("./../utility/AppError");
const Product = require("./../model/productModel");
const Review = require("./../model/reviewModel");
const ExternalCategory = require("./../model/externalCategoryModel");
const InternalCategory = require("./../model/internalCategoryModel");
const Service = require("./../model/serviceModel");
const Fashion = require("./../model/fashionModel");
const home = catchErrorAsync(async (req, res, next) => {
  const externalCategory = await ExternalCategory.find()
    .populate({
      path: "internalCategories",
      select: "name -externalCategoryId -_id",
    })
    .populate({
      path: "products",
      select: "name photo -_id -externalCategoryId",
    });
  console.log(externalCategory);
  const product = await Product.find().populate({
    path: "reviews",
    select: "rating",
  });
  const internalCategory = await InternalCategory.find();
  const service = await Service.find();
  const fashion = await Fashion.find();
  //   const photo = externalCategory.products[0];
  res.render("home", {
    // photo: photo,
    extCategories: externalCategory,
    products: product,
    intCategoryies: internalCategory,
    services: service,
    fashions: fashion,
  });
});

const getOneCategory = catchErrorAsync(async (req, res, next) => {
  const externalCategory = await ExternalCategory.find();
  const category = await ExternalCategory.findById(req.params.id);
  const products = await Product.find({
    externalCategoryId: req.params.id,
  }).populate({
    path: "reviews",
    select: "rating",
  });
  res.status(200).render("category", {
    extCategories: externalCategory,
    category: category,
    products: products,
  });
});

const getOneProduct = catchErrorAsync(async (req, res, next) => {
  const externalCategory = await ExternalCategory.find();
  const product = await Product.findById(req.params.id);
  const review = await Review.find({ productId: req.params.id }).populate({
    path: "userId",
    select: "name photo",
  });
    res.status(200).render("")
});
module.exports = { home, getOneCategory, getOneProduct };
