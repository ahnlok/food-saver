const router = require("express").Router();
const foodItemsController = require("../../controllers/foodItemsController");


router
  .route("/")
  .get(foodItemsController.findAll)
  .post(foodItemsController.create);


router
  .route("/:id")
  .get(foodItemsController.findById)
  .put(foodItemsController.update)
  .delete(foodItemsController.remove);

module.exports = router;