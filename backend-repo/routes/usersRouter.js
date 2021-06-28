const express = require("express");
const router = express.Router();

const {
  getUser,
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersControllers");

//users
router.route("/").get(getUsers).post(addUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
