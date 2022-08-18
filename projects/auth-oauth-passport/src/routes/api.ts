import express from "express";
import path from "path";
import { authRouter } from "./auth/auth.router";

let apiRouter = express.Router();

apiRouter.use("/auth", authRouter);

apiRouter.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

apiRouter.get("/secret", (req, res) => {
    res.send("My Super Secret!");
});

export { apiRouter };
