const router = require("express").Router();
const { login } = require("../controllers/authenticate");

router.route("/").post(login);

module.exports = router;
