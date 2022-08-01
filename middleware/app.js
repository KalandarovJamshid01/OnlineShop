const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const sanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const morgan = require("morgan");
const path = require("path");

const AppError = require("./../utility/AppError");
const ErrorController = require("./../utility/ErrorController");
const extCategoryRoute = require("./../routes/extCategoryRoute");
const intCategoryRoute = require("./../routes/intCategoryRoute");
const colorRoute = require("./../routes/colorRoute");
const sizeRoute = require("./../routes/sizeRoute");
const productRoute = require("./../routes/productRoute");
const userRoute = require("./../routes/userRoute");
const reviewRoute = require("./../routes/reviewRoute");
const fashionRoute = require("./../routes/fashionRoute");
const viewRoute = require("./../routes/viewRoute");
const serviceRoute = require("./../routes/serviceRoute");
const app = express();

app.use(helmet());

app.use(express.json({ limit: "10kb" }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./../views"));

app.use(sanitize());

app.use(xss());

app.use(hpp());

app.use(express.static(path.join(__dirname, "./../public")));

app.use(morgan("dev"));

const limit = rateLimit({
  max: 10,
  windowMs: 1 * 60 * 60 * 1000,
  message: "Too many requests from this IP, Please try again later",
});

app.use("/api", limit);

app.use("/", viewRoute);
app.use("/api/v1/externalCategories", extCategoryRoute);
app.use("/api/v1/internalCategories", intCategoryRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/colors", colorRoute);
app.use("/api/v1/sizes", sizeRoute);
app.use("/api/v1/fashions", fashionRoute);
app.use("/api/v1/services", serviceRoute);
app.all("*", function (req, res, next) {
  next(new AppError(`this url hasn't found:${req.originalUrl}`, 404));
});
app.use(ErrorController);

module.exports = app;
