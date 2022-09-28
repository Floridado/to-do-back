const User = require("../models/User");

const nameChange = (req, res, next) => {
  const { name, id: _id } = req.body;
  User.findById(id).then((user) => {
    User.updateOne({ id, $set: { name } }).catch((error) =>
      res.json({ error })
    );
  });
};
