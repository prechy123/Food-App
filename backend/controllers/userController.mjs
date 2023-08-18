import User from "../model/userModel.mjs";
import md5 from "md5";

export const signupAccount = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(409).json({ message: "Account already exists" });
    } else {
      const encyptedPassword = md5(password);
      await User.create({ email, password: encyptedPassword });
      res.status(200).json({ message: "Account created successfully" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const loginAccount = async (req, res) => {
  const { email, password } = req.body;
  const encyptedPassword = md5(password)
  try {
    const user = await User.findOne({ email, password: encyptedPassword });
    if (user) {
      res.status(200).json({ message: "Successfully logged in" });
    } else {
      res.status(400).json({ message: "Account not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
