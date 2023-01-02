const User = require("../models/user");

const getUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).exec();
  
    if (!user) {
      return res.status(400).json({ status: "Invalid email or password." });
    }
  
    // Check if the provided password matches the hashed password in the database
    if (password !== user.password) {
      return res.status(400).json({ status: "Invalid email or password." });
    }
  
    return res.status(200).json({ status: "Successfully logged in." });
  }

module.exports = getUser;