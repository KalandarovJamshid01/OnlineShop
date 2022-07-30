const router = require("express").Router();
const reviewController = require("./../controller/reviewController");
router
  .route("/")
  .get(reviewController.getAllReview)
  .post(reviewController.addReview);

router
  .route("/:id")
  .get(reviewController.getOneReview)
  .patch(reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports = router;
