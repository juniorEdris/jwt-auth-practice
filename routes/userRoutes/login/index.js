const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../../models/User");
const { generateToken } = require("../../../utils");
const router = express.Router();

module.exports = router.post("/api/login", async (req, res) => {
  const { email, password, userPassword } = req.body;

  if (!email || !password) {
    res.status(400).json({
      message: "Please add all the fields!",
    });
    // throw new Error('Please add fields');
  } else {
    // check user
    const user = await User.findOne({
      email: email.replaceAll(" ", ""),
    });
    if (user) {
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const decodedPassword = await bcrypt.compareSync(
        password,
        user.password,
        salt
      );
      // generate token
      const accessToken = generateToken(user._id, user.email);
      // get user
      if (user && decodedPassword) {
        res
          .cookie("accessToken", accessToken, {
            httpOnly: true,
          })
          .status(200)
          .json({
            data: {
              user: {
                id: user._id,
                name: user.userName,
                email: user.email,
                profileImage: user.userImage,
              },
              status: true,
              message: "successful",
            },
          });
      } else {
        res.status(400).json({
          data: {
            status: false,
            message: "Invalid credentials!",
          },
        });
      }
    } else {
      res.status(400).json({
        data: {
          status: false,
          message: "No user found!",
        },
      });
    }
  }
});
