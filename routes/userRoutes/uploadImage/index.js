const express = require("express");
const authMiddleware = require("../../../middleware/authMiddleware");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../utils/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});

// const upload = multer({ dest: "../images/" });
const upload = multer({ storage: storage }).single("file");

module.exports = router.post("/api/upload", authMiddleware, (req, res) => {
  upload(req, res, (err) => {
    // console.log({ req });
    if (err) {
      // console.log({ err });
      res.status(400).json({ message: "Something went wrong!", status: false });
    }
    res.status(200).json({ message: "Success", status: true, file: req.file });
  });
});
