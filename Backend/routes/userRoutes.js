const express = require("express");

const {
  signUp,
  login,
  forgotPassword,
} = require("../Controller/authController");
const { getAllUsers } = require("../Controller/userController");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signIn", login);
router.post("/forgotpassword", forgotPassword);
router.get("/getusers", getAllUsers);

module.exports = router;
