require("dotenv").config();
const passport = require("passport");
passport.use( require("./config/jwtPassportStrategy") );

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

app.use("/api",require("./routes/authentication"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}