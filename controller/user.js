const user = require("../model/user");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const newUser = new user({
      fullname,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();
    res.status(201).json({ "User created!": newUser });
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

module.exports = { signUp };
