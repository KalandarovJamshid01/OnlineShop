const router = require("express").Router();
const viewController = require("./../controller/viewController");

router.route("/").get(viewController.home);
router.route("/home").get(viewController.home);
router.route("/category/:id").get(viewController.getOneCategory);
router.route("/product/:id").get(viewController.getOneProduct);
module.exports = router;
