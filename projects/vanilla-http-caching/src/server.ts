import dotenv from "dotenv";
import { createServer, IncomingMessage, ServerResponse } from "http";

dotenv.config();
const PORT = process.env["PORT"] || 8000;

let server = createServer((req: IncomingMessage, res: ServerResponse) => {
    switch (req.url) {
        case "/": {
            let html = createPage("Home");
            res.end(html);
            break;
        }
        case "/page-1": {
            let html = createPage("Page 1");
            res.end(html);
            break;
        }
    }
});

console.log(`🚀 Up and running at port: ${PORT}`);
server.listen(PORT);

////////////////////////////////////////////////////////////////////////////////

function createPage(title: string) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>${title}</title>
            <link rel="favicon" href="https://remix.run/favicon.ico"/>
        </head>
        <body>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/page-1">Page 1</a></li>
            </ul>
            <h1>${title}</h1>
            </hr>
            ${Array.from({ length: 1000 })
                .map(
                    () => `<div>I am a random number: 🎲 ${Math.random()}</div>`
                )
                .join("\n")}
        </body>
    </html>
    `;
}
