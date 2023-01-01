const express = require("express");
const registerUser = require("../src/controllers/registration");
const router = express.Router();
router.post("/registration", registerUser);

module.exports = router;
