const express = require("express");
const router = express.Router();
const { auth } = require("../helpers/auth");

const users_controller = require("../controllers/users_controller");

router.get("/", auth, users_controller.find);
router.get("/:userId", auth, users_controller.findOne);
router.put("/:userId", auth, users_controller.update);
router.delete("/:userId", auth, users_controller.delete);

module.exports = router;
