const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

// Middlewares
app.use(bodyParser.json());

// Import Routes
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/post");

app.use("/api/user", authRoute);
app.use("/api/posts", postsRoute);

// ROUTES
// app.get("/", (req, res) => {
//   res.send("Node JS rest api is now available");
// });

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to database.");
  }
);

// Listen server
let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on 3000`);
});
