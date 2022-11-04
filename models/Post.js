const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Post",
  mongoose.Schema(
    {
      userId: {
        type: String,
        required: [true, "Please provide an user"],
      },
      userName: {
        type: String,
        required: [true, "Please provide an user"],
      },
      text: {
        type: String,
      },
      createdAt: {
        type: Date,
      },
    },
    {
      timestamps: true,
    }
  )
);
