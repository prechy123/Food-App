import User from "../model/userModel.mjs";
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";

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
      try {
        const existingUser = await User.findOne({ email: email });
        const token = jwt.sign(
          { userId: existingUser._id },
          process.env.MY_SECRET,
          { expiresIn: "1h" }
        );
        return res
          .status(200)
          .json({ message: "token created successfully", token: token });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
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
      const checkPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (checkPassword) {
        const token = jwt.sign(
          { userId: existingUser._id },
          process.env.MY_SECRET,
          { expiresIn: "1h" }
        );
        res.set("Set-Cookie", "token=" + token);
        return res
          .status(200)
          .json({ message: "account successfully logged in", token: token });
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

export const getFoods = async (req, res) => {
  //using chaining operator (?.) incase req.header.cookir returns null or undefined
  const sessionId = req.headers.cookie?.split("=")[1];
  const userSession = sessions[sessionId];
  if (!userSession) {
    return res.json({ message: "Invalid session" });
  }
  const { userId, email } = userSession;
  const user = await User.findOne({ _id: userId });
  res.send({
    title: "So its working hahaha",
    email,
    userId,
    food: user.food,
  });
};
export const addFood = async (req, res) => {
  const { mealId } = req.body;
  const { userId } = req.user;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { food: mealId } },
    );
    res.status(200).json({ food: "added", user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const logOut = (req, res) => {
  res.clearCookie("token");
  //to clear cookies
  res.set("Set-Cookie", "session=; expires=Thu, 01 Jan 1970 00:00:00 GMT");
  res.send("Logged out successfully.");
};
