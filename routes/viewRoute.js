const router = require("express").Router();
const viewController = require("./../controller/viewController");

router.route("/").get(viewController.home);
router.route("/home").get(viewController.home);

module.exports = router