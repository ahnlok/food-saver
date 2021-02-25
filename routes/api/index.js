const router = require("express").Router();
const foodRoutes = require("./foods");

router.use("/foods", foodRoutes);

module.exports = router;