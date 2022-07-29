const router = require("express").Router();
const userController = require("./../controller/userController");
const authController = require("./../controller/authController");

router.route("/signup").post(authController.signup);
router.route("/signin").post(authController.signIn);
router
  .route("/")
  .get(authController.protect, userController.getAllUsers)
  .post(userController.addUser);
router
  .route("/:id")
  .get(userController.getOneUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
