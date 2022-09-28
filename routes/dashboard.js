const auth = require('./auth');

const router = require('express').Router();

router.post("/profile", auth, userData)