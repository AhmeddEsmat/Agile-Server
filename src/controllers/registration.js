const User = require("../models/User");

const registerUser = async (req, res) => {
  const body = req.body;
  const newUser = new User({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password,
    role: body.role,
  });
  await newUser.save();
  res.send("New User Saved");
};

module.exports = registerUser;
