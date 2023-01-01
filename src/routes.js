const express = require("express");

const registerUser = require("../src/controllers/registration");
const getUser = require("../src/controllers/getUser");

const router = express.Router();

router.post("/registration", registerUser);
router.get("/getUser", getUser);


module.exports = router;
