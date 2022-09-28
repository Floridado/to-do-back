const router = require("express").Router();

const Mongoose = require("mongoose");
const User = require("../models/User");
const AuthController = require("../controllers/authController");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
