const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.TOKEN);
    req.user = decode;
    next();
  } catch (error) {
    res.json({ message: "Authentication failed", err: error.message });
  }
};

module.exports = auth;
