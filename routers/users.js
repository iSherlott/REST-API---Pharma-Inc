const express = require("express");
const router = express.Router();
const { auth } = require("../helpers/auth");

const users_controller = require("../controllers/users_controller");

router.get("/", users_controller.find);
router.get("/:userId", users_controller.findOne);
// router.put("/", auth, users_controller.update);
// router.delete("/:id", auth, users_controller.delete);

module.exports = router;
