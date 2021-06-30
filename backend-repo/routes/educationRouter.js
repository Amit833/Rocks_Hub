const express = require("express");
const router = express.Router();

const {
  addEducation,
  getEducations,
  getEducation,
  deleteEducation,
  updateEducation,
} = require("../controllers/educationControllers");

router.route("/").get(getEducations).post(addEducation);
router
  .route("/:id")
  .get(getEducation)
  .put(updateEducation)
  .delete(deleteEducation);

module.exports = router;
