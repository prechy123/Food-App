// import mongoose from "mongoose";
import User from "../model/userModel.mjs";

export const findOneOrCreate = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      await User.create({ email, password });
      res.status(200).json({ note: "New Account created" });
    } else {
      res.status(200).json({ note: "Account Logged in" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
