const express = require("express");
const router = express.Router();

const {
  addProfile,
  getProfiles,
  getProfile,
  deleteProfile,
  updateProfile,
} = require("../controllers/profileControllers");

const {
  addEmployment,
  getEmployments,
  getEmployment,
  deleteEmployment,
  updateEmployment,
} = require("../controllers/employmentControllers");

const {
  addEducation,
  getEducations,
  getEducation,
  deleteEducation,
  updateEducation,
} = require("../controllers/educationControllers");

router.route("/").get(getProfiles).post(addProfile);
router.route("/:id").get(getProfile).put(updateProfile).delete(deleteProfile);

router.route("/:id/:education").get(getEducation).post(addEducation);
router.route("/:id/employment").get(getEmployment).post(addEmployment);

module.exports = router;
