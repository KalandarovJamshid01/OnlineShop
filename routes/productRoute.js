const router = require("express").Router();
const productController = require("./../controller/productController");
router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.addProduct);

router
  .route("/:id")
  .get(productController.getOneProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
