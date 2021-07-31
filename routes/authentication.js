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

/**
 * Log in an existing user by signing and returning a secure JWT token
 * for the client application to store and include with requests.
 */
 router.post("/user/login", validateBodyWith( loginValidator ), async (req, res) => {

    const { email, password } = req.body;
    console.log("login routes is being called")
    try {
  
      const user =
        await User
          .findOne({ email });
  
      if (!user) {
        // User not found by email.
        return res.status(404).json({ default: "Email or password is invalid." });
      }
  
      const {
        password: encryptedPassword,
        // User object without the password
        ...secureUser
      } = user._doc;
  
      const isMatch = await bcrypt.compare( password, encryptedPassword );
      
      if( !isMatch ) {
        // User's password is invalid.
        return res.status(404).json({ default: "Email or password is invalid." });
      }
  
      const payload = {
        id: secureUser._id,
        email: secureUser.email
      };
  
      // Create a signed JWT token to send back to the client for reauthentication.
      const token = await jwtSign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: 31556926 // 1 year in seconds
        }
      );
  
      return res.json({
        success: true,
        token: "Bearer " + token,
        user: secureUser
      })
    
  
    } catch( err ) {
  
      console.log(err);
      res.status(500).json({ default: "Something went wrong trying to log in." });
  
    }
  
  });