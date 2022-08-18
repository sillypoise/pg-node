import express from "express";
import { httpAuth, httpGoogleAuth } from "./auth.controller";

let authRouter = express.Router();

authRouter.post("/", httpAuth);

authRouter.get("/auth/google", httpGoogleAuth);

export { authRouter };
