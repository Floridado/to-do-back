const Mongoose = require("mongoose");

const userSchema = Mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    todos: {
      type: Array,
      ref: "Todo",
    },
  },
  { timestamps: true }
);
module.exports = Mongoose.model("user", userSchema);
