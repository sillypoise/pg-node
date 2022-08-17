import express from "express";
import { httpAuth } from "./auth.controller";

let authRouter = express.Router();

authRouter.post("/", httpAuth);
authRouter.get("/test", (req, res) => {
    return res.json("testeroni");
});

export { authRouter };
