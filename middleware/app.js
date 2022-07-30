const express = require("express");
const AppError = require("./../utility/AppError");
const ErrorController = require("./../utility/ErrorController");
const extCategoryRoute = require("./../routes/extCategoryRoute");
const intCategoryRoute = require("./../routes/intCategoryRoute");
const colorRoute = require("./../routes/colorRoute");
const sizeRoute = require("./../routes/sizeRoute");
const productRoute = require("./../routes/productRoute");
const userRoute = require("./../routes/userRoute");
const reviewRoute = require("./../routes/reviewRoute");
const app = express();
app.use(express.json());
app.use("/api/v1/externalCategories", extCategoryRoute);
app.use("/api/v1/internalCategories", intCategoryRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/colors", colorRoute);
app.use("/api/v1/sizes", sizeRoute);
app.all("*", function (req, res, next) {
  next(new AppError(`this url hasn't found:${req.originalUrl}`, 404));
});
app.use(ErrorController);

module.exports = app;
