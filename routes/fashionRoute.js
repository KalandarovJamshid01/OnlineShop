const router = require("express").Router();
const fashionController = require("./../controller/fashionController");

router
  .route("/")
  .get(fashionController.getAllFashion)
  .post(fashionController.addFashion);

router
  .route("/:id")
  .get(fashionController.getOneFashion)
  .patch(fashionController.updateFashion)
  .delete(fashionController.deleteFashion);

module.exports = router;
