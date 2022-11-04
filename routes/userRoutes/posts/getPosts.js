const express = require("express");
const authMiddleware = require("../../../middleware/authMiddleware");
const Post = require("../../../models/Post");
const router = express.Router();

module.exports = router.get("/api/posts", async (req, res) => {
  const user = req.user;

  // check user
  const data = await Post.find();

  // get user
  if (data) {
    res.status(200).json({
      data: {
        posts: data,
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
});
