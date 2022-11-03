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

// Allow cross-origin request
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

// End points
app.use("/", registerRoute);
app.use("/", loginRoute);
app.use("/", logoutRoute);
app.use("/", getUserRoute);

app.listen(PORT, () => {
  console.log(`Server started at localhost:${PORT}`);
});

module.exports = app;
