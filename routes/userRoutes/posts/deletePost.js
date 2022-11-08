const express = require("express");
const authMiddleware = require("../../../middleware/authMiddleware");
const Post = require("../../../models/Post");
const router = express.Router();

module.exports = router.post(
  "/api/delete/post/:id",
  authMiddleware,
  async (req, res) => {
    try {
      const { id } = req.params;

      // create Post
      await Post.deleteOne({ _id: id }).then((data) => {
        if (data) {
          res.status(200).json({
            data: {
              status: true,
              message: "Post deleted successfully!",
            },
          });
        }
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        data: {
          status: false,
          message: "Post delete unsuccessful!",
        },
      });
    }
  }
);
