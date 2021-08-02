const router = require("express").Router();

const userRoutes = require("./user");
const authRoutes = require("./authentication");

router.use("/user", userRoutes);

//! Make sure to use the route as `/auth` to avoid collision,
//! since you have defined `/user/login` in the authentication module.
router.use("/auth", authRoutes);

module.exports = router;