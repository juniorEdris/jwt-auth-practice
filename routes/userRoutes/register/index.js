const express = require("express");
const bcrypt = require("bcryptjs");
const jsonwebToken = require("jsonwebtoken");
const User = require("../../../models/User");
const userExist = require("../../../middleware/userExist");
const { generateToken } = require("../../../utils");
const router = express.Router();

module.exports = router.post("/api/register", userExist, async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      message: "Please add fields",
    });
    // throw new Error('Please add fields');
  } else {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    // create user
    await User.create({ email, password: hashedPass })
      .then((data) => {
        const { _id, email } = data;
        const accessToken = generateToken(_id, email);
        res.status(200).json({
          data: {
            id: _id,
            email: email,
            accessToken,
            status: true,
            message: "success",
          },
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: false,
          message: "Invalid credentials!",
        });
        console.log(error);
        // throw new Error('invalid user data');
      });
  }
});
