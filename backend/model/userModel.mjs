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
    food: [
      {
        stringValue: {
          type: Number,
        },
        timeStampValue: {
          type: Date,
          default: Date.now,
        },
        _id: false
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
