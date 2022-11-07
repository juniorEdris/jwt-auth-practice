const express = require("express");
const authMiddleware = require("../../../middleware/authMiddleware");
const Comments = require("../../../models/Comments");
const Post = require("../../../models/Post");
const router = express.Router();

module.exports = router.post(
  "/api/create-comment/:postId",
  authMiddleware,
  async (req, res) => {
    try {
      const { comment = "" } = req.body;
      const { _id: userId, userName, userImage } = req.user;
      const { postId } = req.params;

      // check comment is there/not
      const postIsActive = await Post.findById(postId);
      // create comment
      if (postIsActive) {
        await Comments.create({
          comment,
          userId,
          userImage,
          userName,
          postId,
        });

        // return response
        return res.status(200).json({
          data: {
            status: true,
            message: "Successful!",
          },
        });
      } else {
        return res.status(400).json({
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
  }
);
