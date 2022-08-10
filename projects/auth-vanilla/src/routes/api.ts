import express, { Request, Response } from "express";

let api = express.Router();

// api.use("/auth", authRouter);
api.get("/auth", (_req: Request, res: Response) => {
    return res.status(200).json("🔑 Authentication Endpoint");
});

api.post("/auth/register", (req: Request, res: Response) => {
    console.log(req.body);
    return res.status(200).json("📝 Register Endpoinlp");
});

export { api };
