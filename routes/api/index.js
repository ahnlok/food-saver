const router = require("express").Router();
const foodRoutes = require("./foods");
const authRoutes = require("./auth");

router.use("/foods", foodRoutes);
router.use("/user", authRoutes);

module.exports = router;