const express = require("express");
const AppError = require("./../utility/AppError");
const ErrorController = require("./../utility/ErrorController");
const extCategoryRoute = require("./../routes/extCategoryRoute");
const intCategoryRoute = require("./../routes/intCategoryRoute");
const app = express();
app.use(express.json());
app.use("/api/v1/externalCategories", extCategoryRoute);
app.use("/api/v1/internalCategories", intCategoryRoute);
app.all("*", function (req, res, next) {
  next(new AppError(`this url hasn't found:${req.originalUrl}`, 404));
});
app.use(ErrorController);

module.exports = app;
