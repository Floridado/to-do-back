const userData = require("../controllers/profileController");
const auth = require("../middleware/authenticate");

const router = require("express").Router();

router.post("/", auth, userData);

module.exports = { dash: router };
