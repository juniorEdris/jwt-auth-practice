const express = require("express");
const Comments = require("../../../models/Comments");
const router = express.Router();

module.exports = router.get("/api/comments/:postId", async (req, res) => {
  try {
    const { postId } = req.params;

    // get user
    const comments = await Comments.find({
      postId,
    }).sort({
      createdAt: 1,
    });

    if (comments) {
      // return comments
      res.status(200).json({
        data: {
          comments,
          status: true,
          message: "successful",
        },
      });
    } else {
      res.status(400).json({
        data: {
          status: false,
          message: "Somthing went wrong!",
        },
      });
    }
  } catch (error) {
    res.status(400).json({
      data: {
        status: false,
        message: "Somthing went wrong!",
      },
    });
  }
});
