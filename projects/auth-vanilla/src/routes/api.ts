import express from "express";
import { authRouter } from "./auth/auth.router";
import { registerRouter } from "./register/register.router";

let api = express.Router();

api.use("/auth", authRouter);

api.use("/register", registerRouter);

export { api };
