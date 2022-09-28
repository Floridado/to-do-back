const User = require("../models/User");

const nameChange = (req, res) => {
  const { name } = req.user;
  const { username, password } = req.body;
  User.updateOne({ name }, { $set: { name: username } })
    .then(() => res.json({ message: "updated" }))
    .catch((error) => res.json({ err: error.message }));
};

const emailChange = (req, res) => {
  const { name } = req.user;
  const { email, password } = req.body;
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

module.exports = { nameChange, emailChange, pwChange };
