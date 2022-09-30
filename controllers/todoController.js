const Todo = require("../models/Todo");
const User = require("../models/User");

const addTodo = (req, res) => {
  const { name } = req.user;
  const { task, dueDate, status } = req.body;
  User.findOne({ name })
    .then((user) => {
      const newTodo = new Todo({
        user: user._id,
        task,
        dueDate,
        status,
      });
      newTodo.save().then(async () => {
        res.json({ message: "added", todos: await Todo.find() });
      });
    })
    .catch((err) => res.json({ message: "error", error: err.message }));
};

const editTodo = (req, res) => {
  const { task, dueDate, status, _id } = req.body;
  const params = req.params.toEdit;
  let update = {};
  if (params === "date") {
    update = { dueDate, status };
  } else if (params === "content") {
    update = { task };
  } else {
    update = { status };
  }
  Todo.findByIdAndUpdate(_id, { $set: update })
    .then(async () => {
      res.json({ message: "updated", todos: await Todo.find() });
    })
    .catch((err) => res.json({ message: "error", error: err.message }));
};

const deleteTodo = (req, res) => {
  const { _id } = req.body;
  Todo.findOneAndDelete(_id)
    .then(async () => {
      res.json({ message: "deleted", todos: await Todo.find() });
    })
    .catch((err) => res.json({ message: "error", error: err.message }));
};

module.exports = { addTodo, editTodo, deleteTodo };
