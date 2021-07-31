const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const util = require("util");

const passwordHash = require("../config/passwordHash");

// Get middleware
const authenticateUser = require("./middleware/authenticateUser");
const validateBodyWith = require("./middleware/validateBodyWith");