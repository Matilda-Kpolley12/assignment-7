const { Schema, model } = require("mongoose");

const TodoSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, "Cannot be empty"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model("Todo", TodoSchema);
