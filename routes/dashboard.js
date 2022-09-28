const auth = require("../middleware/authenticate");

const router = require("express").Router();

router.post("/profile", auth, userData);
