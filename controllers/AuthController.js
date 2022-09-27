const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      res.json({ err });
    }
    let newUser = new User({
      name,
      email,
      password: hash,
    });
    newUser
      .save()
      .then(() => {
        res.json({ message: "User added successfully" });
      })
      .catch((err) => {
        res.json({ message: "An Error Occured!", err });
      });
  });
};

module.exports = {
  register,
};
