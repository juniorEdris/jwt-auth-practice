const jwt = require("jsonwebtoken");

// generate JWT
exports.generateToken = (id, email) => {
  return jwt.sign({ id, user_email: email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};
// generate JWT
exports.generateRefreshToken = (id, email) => {
  return jwt.sign({ id, user_email: email }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};
