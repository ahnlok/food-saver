const path = require("path");
const router = require("express").Router();
const foodRoutes = require("./foods");
const authRoutes = require("./auth");

// API Routes
router.use("/foods", foodRoutes);
router.use("/user", authRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;