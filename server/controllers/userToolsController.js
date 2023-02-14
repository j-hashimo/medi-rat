const UserTools = require("../models/userToolModel");
const mongoose = require("mongoose");
//get all user tools
const getUserTools = async (req, res) => {
  const userTools = await UserTools.find({}).sort({ createdAt: -1 }); //This is a mongoose method that finds all the workouts in the database. When the object is empty, it will find all the workouts (if you added a property for the object, it will only find workouts that match that property). Also use the sort method to sort the workouts by the createdAt property in descending order (newest to oldest)
  //Also, by inserting user_id into the find method, we are only getting the workouts that belong to the user that is logged in

  res.status(200).json(userTools); //This will send the workouts to the client
};

//get a single user tool
const getUserTool = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "User tool not found" });
  }

  const userTool = await UserTools.findById(id);
  if (!userTool) {
    res.status(404).json({ error: "User tool not found" });
  }
  res.status(200).json(userTool);
};

//create new user tool
const createUserTool = async (req, res) => {
  const { link, title, description, imageURL, imageAlt } = req.body;

  //add doc to db
  try {
    const tool = await UserTools.create({
      link,
      title,
      description,
      imageURL,
      imageAlt,
    });
    res.status(200).json(tool);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a user tool
const deleteUserTool = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "User tool not found" });
  }

  const userTool = await UserTools.findByIdAndDelete({ _id: id });

  if (!userTool) {
    res.status(404).json({ error: "User tool not found" });
  }

  res.status(200).json(userTool);
};

//Update a tool
const updateTools = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "tool not found" }); //we need to put return here so that the rest of the function doesn't run
  }

  const userTools = await UserTools.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  ); //findOneAndUpdate is a mongoose method that finds a workout by its id and updates it. _id is the id that mongodb uses (the first argument of this method asks for the find criteria). The second argument is the object that will be updated. The spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object (in this case it is req.body). This will update the workout object with the new values that the user enters regarding said object.

  if (!userTools) {
    return res.status(400).json({ error: "Tool not found" });
  }

  res.status(200).json({ mssg: "Tool updated" });
};

module.exports = {
  createUserTool,
  getUserTools,
  getUserTool,
  deleteUserTool,
  updateTools,
};
