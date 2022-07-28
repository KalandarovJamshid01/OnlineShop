const mongoose = require("mongoose");

const mongo = () => {
  mongoose
    .connect(process.env.DB, {})
    .then(() => {
      console.log("Db Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongo;
