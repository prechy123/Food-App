import User from "../model/userModel.mjs";
import bcrypt from "bcrypt";

export const signupAccount = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "Email exists" });
    } else {
      const encyptedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        email,
        password: encyptedPassword,
      });
      await newUser.save();
      res.status(200).json({ message: "Account successfully created" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginAccount = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    const encyptedPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (encyptedPassword) {
      res.status(200).json({ message: "account successfully logged in" });
    } else {
      res.status(400).json({ message: "Account not found hahahah" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
