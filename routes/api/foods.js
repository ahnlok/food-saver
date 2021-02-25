const router = require("express").Router();
const foodsController = require("../../controllers/foodController");

// Matches with "/api/foods"
router
    .route("/main")
    .get(foodsController.findAll)
    .post(foodsController.create);

// Matches with "/api/foods/:id"
router 
    .router("/:id")
    .get(foodsController.findById)
    .put(foodsController.update)
    .delete(foodsController.remove);

module.exports = router;
