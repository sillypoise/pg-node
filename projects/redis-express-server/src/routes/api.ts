import express from "express";
import { userRouter } from "./user/user.router";

let api = express.Router();

api.use("/user", userRouter);

export { api };
