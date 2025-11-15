import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@[\w-\.]+\.[a-z]{2,4}$/i.test(v);
      },
      message: "Invalid email format.",
    },
  },
  password: {
    type: String,
    required: true,
  },
  gstNumber: {
    type: String,
    required: true,
  },
  cinNumber: {
    type: String,
    required: true,
  },
  employeeCount: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
