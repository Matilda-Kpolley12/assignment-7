const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Provide username."],
    },
    password: {
      type: String,
      required: [true, "Enter password"],
    },
    email: {
      type: String,
      required: [true, "Provide valid email. Email already exists"],
      unique: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
