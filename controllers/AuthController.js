const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ name }).then((user) => {
    if (!user) {
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
    } else {
      res.json({ message: "Username already taken" });
    }
  });
};

const login = (req, res, next) => {
  const { name, password } = req.body;

  User.findOne({ name }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, result) => {
        if (error) res.json({ message: "An error occured", err });
        if (result) {
          let token = jwt.sign({ name: user.name }, process.env.TOKEN, {
            expiresIn: "2h",
          });
          res.json({
            message: "Login Successful",
            token,
          });
        } else {
          res.json({ message: "Wrong password" });
        }
      });
    } else {
      res.json({
        message:
          "User not found! Please make sure you entered the correct information",
      });
    }
  });
};

module.exports = {
  register,
  login,
};
