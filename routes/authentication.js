const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const util = require("util");

const passwordHash = require("../config/passwordHash");

// Get middleware
const authenticateUser = require("./middleware/authenticateUser");
const validateBodyWith = require("./middleware/validateBodyWith");

// Data validators
const { loginValidator, registerValidator } = require("./validation");

// Load User model
const { User } = require("../models");

const jwtSign = util.promisify( jwt.sign );

// Get the currently authenticated user
router.post("/user/authenticated", authenticateUser, (req, res) => {

  res.json( req.user );

});
