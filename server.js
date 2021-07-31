require("dotenv").config();
const passport = require("passport");
passport.use( require("./config/jwtPassportStrategy") );

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;