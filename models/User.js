const mongoose = require("mongoose");

module.exports = mongoose.model(
  "User",
  mongoose.Schema(
    {
      userName: {
        type: String,
        required: [true, "Please provide an username"],
      },
      userImage: {
        type: String,
      },
      email: {
        type: String,
        required: [true, "Please provide an email"],
      },
      password: {
        type: String,
        required: [true, "Please provide an password"],
      },
    },
    {
      timestamps: true,
    }
  )
);
