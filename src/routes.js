const express = require("express");
const registerUser = require("./controllers/registration");
const router = express.Router();
router.post("/registration", registerUser);

module.exports = router;
