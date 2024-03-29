const express = require("express");
const authMiddleware = require("../../../middleware/authMiddleware");
const router = express.Router();

module.exports = router.post(
  "/api/logout",
  authMiddleware,
  async (req, res) => {
    const { user } = req;
    if (user !== null && !!user._id) {
      res
        .clearCookie("accessToken", {
          secure: true,
          sameSite: "none",
        })
        .status(200)
        .json({ message: "User has been logged out.", status: true });
      // res.status(200).json({
      //     message: 'Logged out!',
      //     status: true
      // });
    } else {
      res.status(401).json({
        message: "Somthing went wrong!",
        status: false,
      });
    }
  }
);
