const Mongoose = require("mongoose");

const userSchema = Mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    todos: {
      task: String,
      dateAdded: Date,
      dueDate: Date,
      status: Boolean,
    },
  },
  { timestamps: true }
);

export default Mongoose.model("User", userSchema);
