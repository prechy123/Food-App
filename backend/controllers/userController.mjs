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
  const { userId } = req.query;
  try {
    const user = await User.findOne({ _id: userId });
    if (user) {
      const foods = user.food;
      res.status(200).json({ foods });
    } else {
      res.status(400).json({ message: "No food found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const addFood = async (req, res) => {
  const { mealId } = req.body;
  const { userId } = req.user;
  try {
    if (userId === undefined) {
      return res.json({ message: "account not found" });
    }
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      // { $push: { food: { stringValue: mealId } } },
      // Use $addToSet to void replacement of items
      {
        $push: {
          food: {
            $each: [{ stringValue: mealId }],
            $position: 0,
          },
        },
      },
      { new: true }
    );
    res.status(200).json({ food: "added", user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

export const deleteFood = async (req, res) => {
  const { selectedFoodId, userId } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $pull: { food: { stringValue: selectedFoodId } } },
      { new: true }
    );
    res.status(200).json({ message: updatedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
