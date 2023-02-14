const express = require("express");

const {
  createUserTool,
  getUserTool,
  getUserTools,
  deleteUserTool,
  updateTools,
} = require("../controllers/userToolsController");

const router = express.Router();
//Get all tools for a user
router.get("/", getUserTools);

//Get a single tool that a user has selected

router.get("/:id", getUserTool);

//Post a tool to a user

router.post("/", createUserTool);

//Delete a tool from a user

router.delete("/:id", deleteUserTool);

//UPDATE tools
router.patch("/:id", updateTools);

module.exports = router;
