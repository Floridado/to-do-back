const Mongoose = require("mongoose");

const todoSchema = Mongoose.Schema(
  {
    user: {
      type: Mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "User",
    },
    task: {
      type: String,
      required: true,
    },
    dueDate: String,
    status: Boolean,
  },
  { timestamps: true }
);

module.exports = Mongoose.model("Todo", todoSchema);
