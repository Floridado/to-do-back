const User = require("../models/User");

let idCounter = 0;

const addTodo = (req, res) => {
  idCounter++;
  const { name } = req.user;
  const { task, dueDate, status } = req.body;
  User.UpdateOne(
    { name },
    { $push: { todos: { idCounter, task, dueDate, status } } }
  ).then(() => res.json({ message: "Task added" }));
};

const editTodo = (req, res) => {
  const { name } = req.user;
  const { task, dueDate, status, _id } = req.body;
  User.UpdateOne(
    { name, "todos._id": _id },
    { $set: { task, dueDate, status } }
  ).then(() => res.json({ message: "Task updated" }));
};

const deleteTodo = (req, res) => {
  const { name } = req.user;
  const { _id } = req.body;
  User.updateOne({ name }, { $pull: { todos: { $elemMatch: { _id } } } });
};

module.exports = { addTodo, editTodo, deleteTodo };
