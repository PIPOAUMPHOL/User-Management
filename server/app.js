import express from "express";
import cors from "cors";
import userRouter from "./apps/userRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
