const express = require("express");
const authMiddleware = require("../../../middleware/authMiddleware");
const Post = require("../../../models/Post");
const router = express.Router();

module.exports = router.post(
  "/api/update/post/:id",
  authMiddleware,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { text = "" } = req.body;
      const user = req.user;

      // if the post is in the collection
      const postExist = await Post.findById(id).then((data) => data);
      //  if the request is from the post owner
      if (postExist?.userId.toString() === user?._id.toString()) {
        // Delete Post
        return await Post.updateOne(
          { _id: id },
          { $set: { text: text.toString() } }
        ).then((data) => {
          if (data) {
            res.status(200).json({
              data: {
                status: true,
                message: "Post updated successfully!",
              },
            });
          }
        });
      } else {
        return res.status(401).json({
          data: {
            status: true,
            message: "Post update unsuccessfully!",
          },
        });
      }
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
