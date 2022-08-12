import { createServer } from "http";
import dotenv from "dotenv";

import { app } from "./app";

dotenv.config();

const PORT = process.env["PORT"] || 8000;

let server = createServer(app);

async function startServer() {
    server.listen(PORT, () => {
        console.log(`🚀 Server running at ${PORT}`);
    });
}

startServer();
