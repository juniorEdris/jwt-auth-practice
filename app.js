const express = require("express");
const cors = require("cors");
const { urlencoded } = require("body-parser");
const multer = require("multer");

// Database import
const connectToDB = require("./config/db");

const mongodburl = `mongodb://localhost:27017/auth`;
connectToDB(mongodburl);

const app = express();
const PORT = 4000;

// import all routes
const registerRoute = require("./routes/userRoutes/register");
const loginRoute = require("./routes/userRoutes/login");
const logoutRoute = require("./routes/userRoutes/logout");
const getUserRoute = require("./routes/userRoutes/getUser");
const cookieParser = require("cookie-parser");
const createPost = require("./routes/userRoutes/posts/createPost");
const getPosts = require("./routes/userRoutes/posts/getPosts");
const uploadImage = require("./routes/userRoutes/uploadImage");

// Allow cross-origin request
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// Logging the rejected field from multer error
app.use((error, req, res, next) => {
  console.log("This is the rejected field ->", error.field);
});

// storage for image upload.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./routes/utils/images");
    cb(null, "../social-crud-app/public/images");
  },
  filename: function (req, file, cb) {
    // C:\Users\user\Documents\GitHub\jwt-auth-practice\routes\utils\images
    const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    const fileName = file.originalname.split(".");
    cb(null, fileName[0] + "_" + uniqueSuffix + "." + fileName[1]);
  },
});
const upload = multer({ storage: storage }).single("file");

// End points
app.use("/", registerRoute);
app.use("/", loginRoute);
app.use("/", logoutRoute);
app.use("/", getUserRoute);
app.use("/", createPost);
app.use("/", getPosts);
// upload image
app.post("/api/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ message: "Something went wrong!", status: false });
    }
    res
      .status(200)
      .json({ message: "Success", status: true, file: req.file.filename });
  });
});

app.listen(PORT, () => {
  console.log(`Server started at localhost:${PORT}`);
});

module.exports = app;
