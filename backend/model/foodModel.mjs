import mongoose from "mongoose";

const foodSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Food = mongoose.model("food", foodSchema);

export default Food;
