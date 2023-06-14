import express = require("express");
import UserController = require("../controllers/user");

const router = express.Router();

router.get("/", (req, res) => {
  UserController.getUsers;
});

export = router;
