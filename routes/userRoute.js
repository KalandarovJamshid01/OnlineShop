const router = require("express").Router();
const userController = require("./../controller/userController");
router.route("/").get(userController.getAllUsers).post(userController.addUser);
router
  .route("/:id")
  .get(userController.getOneUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
