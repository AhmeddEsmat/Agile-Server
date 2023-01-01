const express = require("express");
const registerUser = require("./controllers/registration");
const router = express.Router();
router.post("/signup", registerUser);

module.exports = router;
