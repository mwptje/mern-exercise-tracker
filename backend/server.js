const express = require("express");
const cors = require("cors");
// add mongoose for mongodb
const mongoose = require("mongoose");

// .env vars
require("dotenv").config();

// declare the express app and port to listen to
const app = express();
const port = process.env.PORT || 5000;

// setup middleware
// cross reference enabler
app.use(cors());
app.use(express.json());

// setup mongodb atlas connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
  useCreateIndex: true,
});
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Atlas database connection established");
});
// add routes for CRUD operations for both models
const usersRouter = require("./routes/users");
const exercisesRouter = require("./routes/exercises");

app.use("/users", usersRouter);
app.use("/exercises", exercisesRouter);

// start up server listening at a port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
