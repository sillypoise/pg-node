import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function connectSQLite() {
    return open({
        filename: "./db/auth.db",
        driver: sqlite3.Database,
    });
}

const db = connectSQLite();

export { db };
