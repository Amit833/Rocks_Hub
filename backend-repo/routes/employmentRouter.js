const express = require("express");
const router = express.Router();

const {
  addEmployment,
  getEmployments,
  getEmployment,
  deleteEmployment,
  updateEmployment,
} = require("../controllers/employmentControllers");

router.route("/").get(getEmployments).post(addEmployment);
router
  .route("/:id")
  .get(getEmployment)
  .put(updateEmployment)
  .delete(deleteEmployment);

module.exports = router;
