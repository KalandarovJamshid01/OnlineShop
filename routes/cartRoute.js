const router = require("express").Router();
const cartController = require("./../controller/cartController");
router.route("/").get(cartController.getAllCarts).post(cartController.addCart);
router
  .route("/:id")
  .get(cartController.getOneCart)
  .patch(cartController.updateCart)
  .delete(cartController.deleteCart);

module.exports = router;
