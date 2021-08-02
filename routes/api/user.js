const router = require("express").Router();
const UserController = require("../../controllers/UserController");

router.route("/addFavorite/:id")
  .post(UserController.addFavorite);


module.exports = router;