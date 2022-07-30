const router = require("express").Router();
const userController = require("./../controller/userController");
const authController = require("./../controller/authController");

router
  .route("/updatePassword")
  .patch(authController.protect, authController.updatePassword);

router.route("/signup").post(authController.signup);
router.route("/signin").post(authController.signIn);
router.route("/forgotPassword").post(authController.forgotPassword);
router.route("/resetPassword/:token").post(authController.resetPassword);
router.route("/updateMe").patch(authController.updateMe);
router.route("/deleteMe").patch(authController.deleteMe);
router
  .route("/")
  .get(
    authController.protect,
    authController.role(["admin"]),
    userController.getAllUsers
  )
  .post(userController.addUser);
router
  .route("/:id")
  .get(userController.getOneUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
