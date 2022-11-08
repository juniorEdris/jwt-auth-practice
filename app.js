const express = require("express");
const cors = require("cors");
const { urlencoded } = require("body-parser");
const multer = require("multer");
require("dotenv").config();

// Database import
const connectToDB = require("./config/db");

const mongodburl = `${process.env.MONGO_URI}/?retryWrites=true&w=majority`;
connectToDB(mongodburl);

const app = express();
const PORT = process.env.NODE_LOCALHOST;

app.use(express.static("build"));

// import all routes
const registerRoute = require("./routes/userRoutes/register");
const loginRoute = require("./routes/userRoutes/login");
const logoutRoute = require("./routes/userRoutes/logout");
const getUserRoute = require("./routes/userRoutes/getUser");
const cookieParser = require("cookie-parser");
const createPost = require("./routes/userRoutes/posts/createPost");
const getPosts = require("./routes/userRoutes/posts/getPosts");
const uploadImage = require("./routes/userRoutes/uploadImage");
const authMiddleware = require("./middleware/authMiddleware");
const getComments = require("./routes/userRoutes/comments/getComments");
const createComment = require("./routes/userRoutes/comments/createComment");
const deletePost = require("./routes/userRoutes/posts/deletePost");

// Allow cross-origin request
/**
 * LOCAL_URL
SERVER_URL
HOSTED_URL
 * 
 */
app.use(
  cors({
    credentials: true,
    origin: process.env.HOSTED_URL,
  })
);
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// storage for image upload.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./build/images`);
    // cb(null, "../social-crud-app/public/images");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(".");
    const uniqueSuffix = `${Date.now()}_${Math.round(
      Math.random() * 1e9
    )}_social_crud.${fileName[1]}`;
    cb(null, uniqueSuffix);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1 * 1000 * 1000 },
  fileFilter: function (req, file, cb) {
    // if (Number(req.headers["content-length"]) < 10000) {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only, jpg, jpeg, png format is allowed."));
    }
  },
});

// End points
app.use("/", registerRoute);
app.use("/", loginRoute);
app.use("/", logoutRoute);
app.use("/", getUserRoute);
app.use("/", createPost);
app.use("/", deletePost);
app.use("/", getPosts);
app.use("/", getComments);
app.use("/", createComment);
// upload image
// app.post("/api/upload", authMiddleware, (req, res) => {
//   try {
//     upload(req, res, (err) => {
//       res
//         .status(200)
//         .json({ message: "Success", status: true, file: req.file.filename });
//     });
//   } catch (error) {
//     console.log({ error });
//     if (error instanceof multer.MulterError) {
//       return res.status(500).json({ message: "Upload failed!", status: false });
//     } else {
//       res.status(500).json({ message: "Image upload failed!", status: false });
//     }
//   }
// });
app.post("/api/upload", authMiddleware, upload.single("file"), (req, res) => {
  try {
    return res.status(200).json({ message: "Success", status: true });
  } catch (error) {
    console.log({ error });
    if (error instanceof multer.MulterError) {
      return res.status(500).json({ message: "Upload failed!", status: false });
    } else {
      res.status(500).json({ message: "Image upload failed!", status: false });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server started at localhost:${PORT}`);
});

module.exports = app;
