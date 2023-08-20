import express from "express";
import {
  // addFood,
  getFoods,
  logOut,
  loginAccount,
  signupAccount,
} from "../controllers/userController.mjs";
// import cookieJwtAuth from "../middleware/cookieJwsAuth.mjs";

const router = express.Router();

router.post("/signupAccount", signupAccount);
router.post("/loginAccount", loginAccount);
// router.post("/add", cookieJwtAuth, addFood)
router.get("/getFoods", getFoods);
router.post("/logOut", logOut);

export default router;