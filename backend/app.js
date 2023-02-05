const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const db = require('./firestore_app')

const smsService = require("./twilio_client")
const userService = require('./users/users.service')(db)

const indexRouter = require("./routes/index");
const githubRouter = require("./github/github.routes");
const usersRouter = require("./users/users.routes")(userService, smsService);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/github-users", githubRouter);
app.use("/users", usersRouter);

module.exports = app;
