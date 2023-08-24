import express from "express";
import {
  addFood,
  getFoods,
  loginAccount,
  signupAccount,
} from "../controllers/userController.mjs";
import cookieJwtAuth from "../middleware/cookieJwtAuth.mjs";

const router = express.Router();

router.post("/signupAccount", signupAccount);
router.post("/loginAccount", loginAccount);
router.post("/add", cookieJwtAuth, addFood);
router.get("/getFoods", getFoods)
export default router;
