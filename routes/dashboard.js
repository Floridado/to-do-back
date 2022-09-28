const {
  pwChange,
  emailChange,
  nameChange,
} = require("../controllers/credsController");
const userData = require("../controllers/profileController");
const auth = require("../middleware/authenticate");

const router = require("express").Router();

router.get("/", auth, userData);
router.put("/pw", auth, pwChange);
router.put("/mail", auth, emailChange);
router.put("/name", auth, nameChange);

module.exports = { dash: router };
