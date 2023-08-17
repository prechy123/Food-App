import express from "express";
import { findOneOrCreate } from "../controllers/userController.mjs";

const router = express.Router();

router.post("/user", findOneOrCreate);

export default router;
