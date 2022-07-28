const router = require("express").Router();
const sizeController = require("./../controller/sizeController");
router.route("/").get(sizeController.getAllSizes).post(sizeController.addSize);

router
  .route("/:id")
  .get(sizeController.getOneSize)
  .patch(sizeController.updateSize)
  .delete(sizeController.deleteSize);

module.exports = router;
