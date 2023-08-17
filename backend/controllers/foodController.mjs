// import mongoose from "mongoose";
import Food from "../model/foodModel.mjs";

export const getAllFood = async (req, res) => {
  await Food.find({})
    .sort({ createdAt: -1 })
    .then((allFood) => {
      res.status(200).json(allFood);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
};

export const getOneFood = async (req, res) => {
  const { id } = req.params;
  try {
    await Food.findOne({ _id: id })
      .then((food) => {
        res.status(200).json(food);
      })
      .catch(() => {
        res.status(404).json({ error: "No such food" });
      });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const addOneFood = async (req, res) => {
  const { email, password } = req.body;

  await Food.create({ email, password })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
};

export const deleteOneFood = async (req, res) => {
  const { id } = req.params;
  await Food.findOneAndDelete({ _id: id })
    .then((food) => {
      res.status(200).json(food);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
};
