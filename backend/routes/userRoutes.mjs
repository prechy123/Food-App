import express from "express";
import { getFoods, logOut, loginAccount, signupAccount } from "../controllers/userController.mjs";

const router = express.Router();

router.post("/signupAccount", signupAccount);
router.post("/loginAccount", loginAccount);
router.get("/getFoods", getFoods)
router.post("/logOut", logOut)

export default router;
