const router = require("express").Router();
const UserController = require("../../controllers/UserController");
const UserHelp = require("../../client/src/utils/register-api")

router.route("/addFavorite/:id")
  .post(UserController.addFavorite);

router.route("/user/login")
    .post("/user/login", validateBodyWith( loginValidator ), async (req, res) => {

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

router.route("/user/register")
    .post("/user/register", validateBodyWith( registerValidator ), async (req, res) => {

    try {
  
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
  
      if (user) {
        // User already exists error.
        return res.status(400).json({ email: "Email already exists." });
      }
  
      const newUser = new User({
        email,
        password: await passwordHash( password )
      });
  
      await newUser.save();
  
      const {
        password: encryptedPassword,
        // User object without the password
        ...secureUser
      } = newUser._doc;
  
      res.json( secureUser );
  
    } catch( err ) {
  
      console.log(err);
      res.status(500).json({ default: "Something went wrong creating your account." });
  
    }
  
  });

router.route("/user/authenticated")
  .post("/user/authenticated", authenticateUser, (req, res) => {

    res.json( req.user );
  
  });

module.exports = router;