const {
  addTodo,
  editTodo,
  deleteTodo,
} = require("../controllers/todoController");
const auth = require("../middleware/authenticate");
const User = require("../models/User");

const router = require("express").Router();

router.get("/", auth, (req, res) => {
  User.find().then((result) => {
    res.json(result);
  });
});

router.post("/add", auth, addTodo);
router.put("/:toEdit", auth, editTodo);
router.delete("/delete", auth, deleteTodo);

module.exports = { todo: router };
