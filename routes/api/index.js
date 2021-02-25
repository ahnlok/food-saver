const router = require("express").Router();
const foodItemsRoutes = require("./foodItems");


router.use("/foodItems", foodItemsRoutes);

module.exports = router;