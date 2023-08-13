import mongoose from "mongoose";

const foodSchema = mongoose.Schema(
  {
    _id: Number,
    foodName: String,
    foodImg: String,
    foodProcedure: String,
  },
  { timestamps: true }
);

const Food = mongoose.model("food", foodSchema);

export default Food;
