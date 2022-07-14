import dotenv from "dotenv";
import { createServer } from "http";

dotenv.config();
const PORT = process.env["PORT"] || 8000;

let server = createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Chill\n");
});

console.log(`Listening on port ${PORT}`);
server.listen(PORT);
