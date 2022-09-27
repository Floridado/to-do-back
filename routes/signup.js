const router = require("express").Router();

const Mongoose = require("mongoose");
const User = require("../models/User");
const AuthController = require("../controllers/AuthController");

router.post("/register", AuthController.register);
