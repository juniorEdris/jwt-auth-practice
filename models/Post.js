const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Post",
  mongoose.Schema(
    {
      userId: {
        type: String,
        required: [true, "Please provide an user"],
      },
      userImage: {
        type: String,
      },
      userName: {
        type: String,
        required: [true, "Please provide an user"],
      },
      text: {
        type: String,
      },
      imageName: {
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
