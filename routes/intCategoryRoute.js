const router = require("express").Router();
const intCategoryCtrl = require("./../controller/internalCategoryController");

router
  .route("/")
  .get(intCategoryCtrl.getAllIntCategories)
  .post(intCategoryCtrl.addIntCategory);
router
  .route("/:id")
  .get(intCategoryCtrl.getOneIntCategory)
  .patch(intCategoryCtrl.updateIntCategory)
  .delete(intCategoryCtrl.deleteIntCategory);

module.exports = router;
