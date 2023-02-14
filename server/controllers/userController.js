const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" }); //DONT FORGET TO MAKE SURE THE ARROW IN THE ARROW FUNCTION IS => , NOT = ! ! ! I left it as = and it didn't pick up the error. we use the _id property as this is what mongodb uses. Sign method takes in 3 arguments: 1) payload (data we want to store in the token), 2) secret (used to sign the token), 3) options (expiresIn is the only option we use here, but there are others)
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password); // this stores the login function made in usermodel

    // create token
    const token = createToken(user._id);

    res.status(200).json({ email, token }); // we send the email and token back to the client. The token will come back as a string with the header, payload, and signature. The header is the type of token and the algorithm used to sign it. The payload is the data we want to store in the token. The signature is the encoded header, payload, and secret. The client will store the token in local storage and send it back to the server with every request. The server will decode the token and check the signature to make sure it hasn't been tampered with. If the signature is valid, the server will know that the token is valid and the user is logged in.
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token }); //if you want to see the encrypted bcrypt password, do .json({email, user})
  } catch (error) {
    res.status(400).json({ error: error.message });
  } // in general, we do try catch blocks in the controller functions because we want to catch any errors that might occur in the model functions
};

module.exports = { loginUser, signupUser };
