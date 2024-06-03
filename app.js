const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connectMongoDb = require("./init/mongodb");
const todoRoute = require("./routes/todo");
const dotenv = require("dotenv");

dotenv.config()

//initialise the app
const app = express();


//mongoDb connection
connectMongoDb();


//view engine(defined middlewares) or creating app instance
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", todoRoute);


module.exports = app;

