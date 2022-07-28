const express = require("express");
const AppError = require("./../utility/AppError");
const ErrorController = require("./../utility/ErrorController");
const extcategoryRoute = require("./../routes/extCategoryRoute");

const app = express();

app.use("/api/v1/externalCategories", extcategoryRoute);
app.all("*", function (req, res, next) {
  next(new AppError(`this url hasn't found:${req.originalUrl}`, 404));
});
app.use(ErrorController);

module.exports = app;
