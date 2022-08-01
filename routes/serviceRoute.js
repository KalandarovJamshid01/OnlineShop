const router = require("express").Router();
const ServiceController = require("./../controller/serviceController");

router
  .route("/")
  .get(ServiceController.getAllService)
  .post(ServiceController.addService);

router
  .route("/:id")
  .get(ServiceController.getOneService)
  .patch(ServiceController.updateService)
  .delete(ServiceController.deleteService);

module.exports = router;
