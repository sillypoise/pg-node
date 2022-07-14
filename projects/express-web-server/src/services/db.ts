// Bring in db connector package

const DB_URL = process.env["DB_URL"] || "db://localhost:27017";

async function dbConnect() {
    await console.log("Connecting to db with url: " + DB_URL);
}

async function dbDisconnect() {
    await console.log("Disconnecting from db...");
}

export { dbConnect, dbDisconnect };
