import express, { Request, Response } from "express";

let app = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json("Aliiiive");
});

app.get("*", (_req: Request, res: Response) => {
    res.status(404).json("404 - page not found");
});

// RouteRegistrator

export { app };
