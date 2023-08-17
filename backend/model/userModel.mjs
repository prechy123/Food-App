import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    food: [{ type: String }],
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
