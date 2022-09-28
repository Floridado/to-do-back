const Mongoose = require("mongoose");

const userSchema = Mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    todos: [{
      _id: Number,
      task: String,
      dateAdded: Date,
      dueDate: Date,
      status: Boolean,
    }],
  },
  { timestamps: true }
);
module.exports = Mongoose.model("user", userSchema);
