import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./routes/userRoutes.mjs";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/", router);

mongoose
  .connect(process.env.DB_CONECTION)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
