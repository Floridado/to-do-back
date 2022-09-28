const User = require("../models/User");

const userData = (req, res) => {
  const { name } = req.user;
  User.findOne({ name })
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      if (error) res.json({ err: error.message });
    });
};
