const express = require("express");
const cors = require("cors");
const { urlencoded } = require("body-parser");

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

// Allow cross-origin request
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// End points
app.use("/", registerRoute);
app.use("/", loginRoute);
app.use("/", logoutRoute);
app.use("/", getUserRoute);
app.use("/", createPost);
app.use("/", getPosts);

app.listen(PORT, () => {
  console.log(`Server started at localhost:${PORT}`);
});

module.exports = app;
