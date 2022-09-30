const Todo = require("../models/Todo");
const User = require("../models/User");

const userData = (req, res) => {
  const { name } = req.user;
  User.findOne({ name })
    .then(async (user) => {
      user.todos = await Todo.find({ user: user._id });
      res.json(user);
    })
    .catch((error) => {
      if (error) res.json({ err: error.message });
    });
};

const nameChange = (req, res) => {
  const { name } = req.user;
  const { username } = req.body;
  User.updateOne({ name }, { $set: { name: username } })
    .then(() => res.json({ message: "updated" }))
    .catch((error) => res.json({ err: error.message }));
};

const emailChange = (req, res) => {
  const { name } = req.user;
  const { email } = req.body;
  User.updateOne({ name }, { $set: { email } })
    .then(() => res.json({ message: "updated" }))
    .catch((error) => res.json({ err: error.message }));
};

const pwChange = (req, res) => {
  const { name } = req.user;
  const { password } = req.body;
  User.updateOne({ name }, { $set: { password } })
    .then(() => res.json({ message: "updated" }))
    .catch((error) => res.json({ err: error.message }));
};

module.exports = { userData, nameChange, emailChange, pwChange };
