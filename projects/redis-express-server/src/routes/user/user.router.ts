import express from "express";
import { httpGetUsers } from "./user.controller";

let userRouter = express.Router();

userRouter.get("/", httpGetUsers);

export { userRouter };
