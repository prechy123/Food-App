import express from "express";
import { loginAccount, signupAccount } from "../controllers/userController.mjs";

const router = express.Router();

router.post("/signupAccount", signupAccount);
router.post("/loginAccount", loginAccount);
// router.post("/addfood/:userId", addFood)

export default router;
