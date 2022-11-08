const express = require("express");
const cors = require("cors");
const { urlencoded } = require("body-parser");
const multer = require("multer");
const dotenv = require("dotenv");

// Database import
const connectToDB = require("./config/db");

const mongodburl = `${
  process.env.MONGO_URI ||
  "mongodb+srv://jr_edris:CMdkMK8OV10nXtkm@eftekar01.0nnjt.mongodb.net"
}/?retryWrites=true&w=majority`; //`mongodb://localhost:27017/auth`;
connectToDB(mongodburl);

const app = express();
const PORT = process.env.NODE_LOCALHOST || 4000;
dotenv.config();

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

// Allow cross-origin request
app.use(
  cors({ credentials: true, origin: "https://jwt-auth-practice.vercel.app" })
);
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// Logging the rejected field from multer error
app.use((error, req, res, next) => {
  console.log("This is the rejected field ->", error.field);
});

// storage for image upload.
const storage = multer.diskStorage({
  fileFilter: function (req, file, cb) {
    // doesnot work
    if (Number(req.headers["content-length"]) < 10000) {
      cb(null, true);
    }
  },
  destination: function (req, file, cb) {
    cb(null, "build/images");
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
  // limits: { fileSize: 1 * 1000 * 1000 },
}).single("file");

// End points
app.use("/", registerRoute);
app.use("/", loginRoute);
app.use("/", logoutRoute);
app.use("/", getUserRoute);
app.use("/", createPost);
app.use("/", getPosts);
app.use("/", getComments);
app.use("/", createComment);
// upload image
app.post("/api/upload", authMiddleware, (req, res) => {
  try {
    upload(req, res, (err) => {
      if (!err) {
        res
          .status(200)
          .json({ message: "Success", status: true, file: req.file.filename });
      }
    });
  } catch (error) {
    console.log({ error });
    res.status(400).json({ message: "Image upload failed!", status: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server started at localhost:${PORT}`);
});

module.exports = app;
