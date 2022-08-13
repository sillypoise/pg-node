import dotenv from "dotenv";
import { createServer } from "http";

import { app } from "./app";
import { db } from "./services/db";

dotenv.config();
const PORT = process.env["PORT"] || 8000;

let server = createServer(app);

async function startServer() {
    await db;
    // start server
    server.listen(PORT, () => {
        console.log(`🚀 Up and running at port: ${PORT}`);
    });
}

startServer();
