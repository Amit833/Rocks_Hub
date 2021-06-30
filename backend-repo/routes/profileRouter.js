const express = require("express");
const router = express.Router();

const {
  addProfile,
  getProfiles,
  getProfile,
  deleteProfile,
  updateProfile,
} = require("../controllers/profileControllers");

router.route("/").get(getProfiles).post(addProfile);
router.route("/:id").get(getProfile).put(updateProfile).delete(deleteProfile);

module.exports = router;
