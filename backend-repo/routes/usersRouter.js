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

//users
router.route("/").get(getUsers).post(validateSchema, addUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

// Route for verifying the user account
router.route("/verify").post(verif, verifyUserAccount);

module.exports = router;
