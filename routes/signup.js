const router = require("express").Router();

const Mongoose = require("mongoose");
const User = require("../models/User");

router.post("/", (req, res) => {
  const { username, password } = req.body;
});
