const Mongoose = require("mongoose");

const todoSchema = Mongoose.Schema({
  user: {
    type: Mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "User",
  },
  task: {
    type: String,
    required: true,
  },
});
