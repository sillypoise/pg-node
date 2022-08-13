import dotenv from "dotenv";
import { createServer, IncomingMessage, ServerResponse } from "http";

dotenv.config();
const PORT = process.env["PORT"] || 8000;

let server = createServer((_req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
});

console.log(`🚀 Up and running at port: ${PORT}`);
server.listen(PORT);
