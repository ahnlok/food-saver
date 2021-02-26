const router = require("express").Router();
const {
  createNewUser,
  loginUser,
} = require("../../controllers/authController");

router.route("/register").post(createNewUser);

router.route("/login").post(loginUser);

module.exports = router;