const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static signup method

userSchema.statics.signup = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("All fields must be filled"); // if no password or no email, or both don't exist -> all fields must be filled. Also on the user controller file, the catch block will catch this error and send it to the front end, if it exists
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid"); //this checks if the email (and password below) has a proper format/length and sends an error
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const exists = await this.findOne({ email }); //this refers to the model, so this.findOne is the same as User.findOne

  if (exists) {
    throw Error("Email already exists");
  } //this exists variable is what differentiates signup from login

  const salt = await bcrypt.genSalt(10); //This creates the salt. the higher the number in the gensalt argument, the longer it takes for users to sign up but the longer it takes for hackers to hack into your database
  const hash = await bcrypt.hash(password, salt); // this hashes the password with the salt

  const user = await this.create({ email, password: hash });

  return user; // this returns the user object which we need to do in order to keep the created user
};

//static login method.
//Note, when you use "this", it can't be inside an arrow function
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  } // this makes sure the user has a password and email before they can login

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password); //bycrpt has a compare method that compares the password the user entered with the password in the database. user.password is the hashed password in the database, and password is the password the user entered (plaintext)

  if (!match) {
    throw Error("Incorrect password");
  }

  return user; // this returns the user if everything before works
};

module.exports = mongoose.model("User", userSchema);
