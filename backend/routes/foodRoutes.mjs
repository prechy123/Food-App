import express from "express";
import { getAllFood, getOneFood, addOneFood, deleteOneFood } from "../controllers/foodController.mjs";

const router = express.Router();

router.get("/", getAllFood);

router.get("/:id", getOneFood);

router.post("/", addOneFood);

router.delete("/:id", deleteOneFood);

export default router;
