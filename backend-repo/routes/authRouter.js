const router = require("express").Router();
const { login } = require("../controllers/authControllers");

router.route("/").post(login);

module.exports = router;
