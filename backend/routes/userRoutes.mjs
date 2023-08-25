import express from "express";
import {
  addFood,
  deleteFood,
  getFoods,
  loginAccount,
  signupAccount,
} from "../controllers/userController.mjs";
import cookieJwtAuth from "../middleware/cookieJwtAuth.mjs";

const router = express.Router();

router.post("/signupAccount", signupAccount);
router.post("/loginAccount", loginAccount);
router.post("/add", cookieJwtAuth, addFood);
router.post("/delete", deleteFood)
router.get("/getFoods", getFoods)
export default router;
