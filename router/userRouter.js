const router = require("express").Router();
const userController = require("../controller/userController");
const { verifyToken } = require("../controller/authController");

router.get("/", userController.getAllUsers);
router.get("/:id", verifyToken, userController.getUser);
router.delete("/:id", userController.deleteUser);
router.patch("/:id", userController.updateUser);

module.exports = router;
