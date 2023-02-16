const express = require("express");

const {
  createUserTool,
  getUserTool,
  getUserTools,
  deleteUserTool,
  updateTools,
} = require("../controllers/userToolsController");

//requireAuth is a middleware function that checks if the user is authenticated
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth); // this is a middleware function that runs before the other functions in this file. It checks if the user is authenticated, and if they are, it will run the next function in the chain, which is the controller functions.

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
