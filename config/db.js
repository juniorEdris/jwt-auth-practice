const mongoose = require("mongoose");

const connectToDB = async (mongodburl) => {
  try {
    await mongoose
      .connect(mongodburl, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then((data) => {
        // console.log({data});
        return data;
      })
      .catch((error) => {
        console.log(error);
        process.exit(1);
      });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectToDB;
