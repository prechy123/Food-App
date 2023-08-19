import express from "express";
import { getFoods, loginAccount, signupAccount } from "../controllers/userController.mjs";

const router = express.Router();

router.post("/signupAccount", signupAccount);
router.post("/loginAccount", loginAccount);
router.get("/getFoods", getFoods)

export default router;
