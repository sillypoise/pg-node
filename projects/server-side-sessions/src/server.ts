import { createServer } from "http";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env["PORT"] || 8000;

let server = createServer();

async function startServer() {
    server.listen(PORT, () => {
        console.log(`🚀 Server running at ${PORT}`);
    });
}

startServer();
