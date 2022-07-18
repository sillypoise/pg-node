import dotenv from "dotenv";
import { createServer, IncomingMessage, ServerResponse } from "http";
import { Server, Socket } from "socket.io";

dotenv.config();
const PORT = process.env["PORT"] || 8000;

let server = createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url !== "/") {
        res.writeHead(404);
        res.end("Not found bud");
        return;
    }
    res.end("You are online");
});

let io = new Server(server, {});

io.on("connection", (s: Socket) => {
    console.log(`connect ${s.id}`);
    s.emit("hello", "world");

    s.on("booya", (data: string) => {
        console.log(data);
    });

    s.on("disconnect", (reason) => {
        console.log(`disconnect ${s.id} due to ${reason}`);
    });
});

console.log(`🚀 Up and running at port: ${PORT}`);
server.listen(PORT);
