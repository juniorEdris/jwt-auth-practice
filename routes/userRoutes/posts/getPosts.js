const express = require("express");
const Post = require("../../../models/Post");
const router = express.Router();

module.exports = router.get("/api/posts", async (req, res) => {
  const user = req.user;

  // check user
  const data = await Post.find({}).sort({ createdAt: -1 });
  // const data2 = await Post.aggregate([{$lookup:{
  //   from: "Comments"
  // }}]);

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
