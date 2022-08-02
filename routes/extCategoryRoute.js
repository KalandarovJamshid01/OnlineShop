const extCategoryCtrl = require("./../controller/externalCategoryController");
const router = require("express").Router();

router
  .route("/")
  .get(extCategoryCtrl.getAllExtCategory)
  .post(extCategoryCtrl.addExtCategory);

router
  .route("/:id")
  .get(extCategoryCtrl.getOneExtCategory)
  .patch(extCategoryCtrl.updateExtCategory)
  .delete(extCategoryCtrl.deleteExtCategory);

module.exports = router;
