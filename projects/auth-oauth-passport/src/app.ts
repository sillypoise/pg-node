import express from "express";
import dotenv from "dotenv";
import { apiRouter } from "./routes/api";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/v1", apiRouter);

export { app };
