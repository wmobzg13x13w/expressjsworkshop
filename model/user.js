const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Student", "Professor"],
    required: true,
    default: "Student",
  },
});

userSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      id: this._id,
      role: this.role,
    },
    process.env.secret_key,
    { expiresIn: "1h" }
  );
  return token;
};

module.exports = mongoose.model("User", userSchema);
