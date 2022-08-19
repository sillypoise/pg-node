import express from "express";
import path from "path";
import { authRouter } from "./auth/auth.router";

let apiRouter = express.Router();

apiRouter.use("/auth", authRouter);

apiRouter.get("/home", (_req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

export { apiRouter };
