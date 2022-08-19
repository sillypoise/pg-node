import express from "express";
import passport from "passport";
import path from "path";
import { authRouter } from "./auth/auth.router";

let apiRouter = express.Router();

apiRouter.use("/auth", authRouter);

apiRouter.get("/home", (req, res) => {
    console.log("🍪🍪🍪 ", req.user);
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

export { apiRouter };
