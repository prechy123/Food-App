import express from "express";
import {
  getAllFood,
  getOneFood,
  addOneFood,
  deleteOneFood,
} from "../controllers/foodController.mjs";

const router = express.Router();

router.get("/foods", getAllFood);

router.get("/food/:id", getOneFood);

router.post("/food", addOneFood);

router.delete("/food/:id", deleteOneFood);

export default router;
