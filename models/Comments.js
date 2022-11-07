const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Comment",
  mongoose.Schema(
    {
      comment: {
        type: String,
        required: [true, "Please provide a comment"],
      },
      userId: {
        type: String,
        required: [true, "Please provide an user id"],
      },
      userImage: {
        type: String,
      },
      userName: {
        type: String,
      },
      postId: {
        type: String,
        required: [true, "Please provide a post id"],
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
