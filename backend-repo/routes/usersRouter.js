const express = require("express");
const router = express.Router();
const { validateSchema } = require("../middleware/validation");

const {
  getUser,
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  verifyUserAccount,
} = require("../controllers/usersControllers");
const verif = require("../middleware/emailVerification");

// Route for verifying the user account
router.route("/verify/:token").post(verif, verifyUserAccount);

//users
router.route("/").get(getUsers).post(validateSchema, addUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
