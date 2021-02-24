const router = require("express").Router();
const foodItemsController = require("../../controllers/foodItemsController");

// Matches with "/api/restaurants"
router
  .route("/")
  .get(foodItemsController.findAll)
  .post(foodItemsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(foodItemsController.findById)
  .put(foodItemsController.update)
  .delete(foodItemsController.remove);

module.exports = router;