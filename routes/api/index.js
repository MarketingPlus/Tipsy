const router = require("express").Router();

const userRoutes = require("./user");
const authRoutes = require("./authentication");

router.use("/user",userRoutes);

router.use("/auth", authRoutes);


module.exports = router;