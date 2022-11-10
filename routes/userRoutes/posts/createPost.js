const express = require("express");
const authMiddleware = require("../../../middleware/authMiddleware");
const Post = require("../../../models/Post");
const router = express.Router();

module.exports = router.post(
  "/api/create/post",
  authMiddleware,
  async (req, res) => {
    try {
      const { text = "", imageName } = req.body;
      const { _id, userName, userImage } = req.user;

      // create Post
      await Post.create({
        userId: _id,
        userImage: userImage.toString(),
        userName: userName.toString(),
        text: text.toString(),
        imageName: imageName.toString(),
      }).then((data) => {
        if (data) {
          res.status(200).json({
            data: {
              status: true,
              message: "post created",
            },
          });
        }
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        data: {
          status: false,
          message: "post created unsuccessful!",
        },
      });
    }
  }
);
