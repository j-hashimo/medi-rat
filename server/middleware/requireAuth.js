const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers; //authorization is a request headers property

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1]; // the authorization is in the format of a string that says "bearer <token>", and we want the token part (2nd part of the array). So we split the string by the space (" ") and take the 2nd part of the array [1].

  try {
    const { _id } = jwt.verify(token, process.env.SECRET); // this verifies the token and returns the payload (in this case, the user id)

    req.user = await User.findOne({ _id }).select("_id"); //this finds the user, then returns just the id of the user, which is used for the other controller function. Also 'user' (after the .) can be called anything, but we call it user bc it is the user that is logged in

    next(); // this is the next function in the middleware chain, which includes the workoutcontroller functions that also take in req, and res arguments. These functions will only run if the user is authenticated.
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
