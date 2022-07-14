import dotenv from "dotenv";
import { createServer, RequestOptions, ServerResponse } from "http";

dotenv.config();
const PORT = process.env["PORT"] || 8000;

let server = createServer((req: RequestOptions, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
});

server.listen(PORT);
