const User = require("../models/User");

module.exports = async (req, res, next) => {
  const { email } = req.body;

  await User.findOne({ email: email.replaceAll(" ", "") })
    .then((data) => {
      if (data) {
        res.status(400).json({
          message: "User already exist. Try another email!",
        });
      } else {
        next();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
