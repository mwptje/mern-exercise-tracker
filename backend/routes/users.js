const router = require("express").Router();
let User = require("../models/user.model");

// get -> get all users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
});

// add a user
router.route("/add").post((req, res) => {
  // the parsed contents
  const username = req.body.username;
  // add the use
  const newUser = new User({ username });
  // save the user to the database
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
