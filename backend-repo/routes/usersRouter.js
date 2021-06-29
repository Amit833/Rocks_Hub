const express = require("express");
const router = express.Router();
const { validateSchema } = require("../middleware/validation");

const {
  getUser,
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersControllers");

//users
router.route("/").get(getUsers).post(validateSchema, addUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
