import User from "../model/userModel.mjs";
import bcrypt from "bcrypt";

export const signupAccount = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.json({ message: "Email exists" });
    } else {
      const encryptedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        email,
        password: encryptedPassword,
      });
      await newUser.save();

      // await User.create({ email, password: encryptedPassword });
      res.status(200).json({ message: "Account successfully created" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const loginAccount = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const encyptedPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (encyptedPassword) {
        res.status(200).json({ message: "account successfully logged in" });
      } else {
        res.json({ message: "Incorrect password" });
      }
    } else {
      res.json({ message: "Email does not exist" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};
