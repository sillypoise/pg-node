import { createServer } from "http";

let server = createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
});

console.log("Listening on port 8000");
server.listen(8000);
