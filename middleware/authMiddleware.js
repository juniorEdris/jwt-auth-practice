const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  let token;
  if (req.headers.cookie && req.headers.cookie.startsWith("accessToken")) {
    try {
      // Get the token
      token = req.headers.cookie.split("=")[1];

      // Verify token
      const decoded = jwt.verify(token, "damnHot"); // JWT_SECRET

      // Get user id from the token
      req.user = await User.findById(decoded.id).select("-password"); // deselect password

      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({
        message: "Not Authorized.",
      });
      // throw new Error('Not Authorized.');
    }
  }

  if (!token) {
    res.status(401).json({
      message: "Not Authorized. Token not found",
    });
    // throw new Error();
  }
};
