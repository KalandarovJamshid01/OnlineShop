const router = require("express").Router();
const colorController = require("./../controller/colorController");
router
  .route("/")
  .get(colorController.getAllColors)
  .post(colorController.addColor);

router
  .route("/:id")
  .get(colorController.getOneColor)
  .patch(colorController.updateColor)
  .delete(colorController.deleteColor);

module.exports = router;
