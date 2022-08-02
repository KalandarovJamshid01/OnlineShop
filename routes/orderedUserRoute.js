const router = require("express").Router();
const oredereduserController = require("./../controller/orderedUserController");
router
  .route("/")
  .get(oredereduserController.getAllOrderedUsers)
  .post(oredereduserController.addOrderedUser);

router
  .route("/:id")
  .get(oredereduserController.getOneOrderedUser)
  .patch(oredereduserController.updateOrderedUser)
  .delete(oredereduserController.deleteOrderedUser);

module.exports = router;
