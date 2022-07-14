let db = ["A", "B", "C", "D", "E"];

async function writeBar(val: string) {
    db.push(val);
    let newBarValues = await db;
    return newBarValues;
}

export { writeBar };
