const User = require("../models/user");

const getUser = async (req, res) => {
  const body = req.body;
  const user = await User.find({}).exec();

  res.json(user);
};

module.exports = getUser;