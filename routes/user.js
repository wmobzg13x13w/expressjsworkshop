const express = require("express");
const router = express.Router();

const { signUp } = require("../controller/user");

router.post("/signup", signUp);

module.exports = router;
