const dotenv = require("dotenv");
dotenv.config();
const app = require("./middleware/app");
const mongo = require("./config/db");
mongo();

app.listen(process.env.PORT, () => {
  console.log(`Listening port on ${process.env.PORT}`);
});
