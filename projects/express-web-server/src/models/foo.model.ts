const db = [1, 2, 3, 4, 5];

async function getAllFoo() {
    let fooValues = await { ...db };
    return fooValues;
}

export { getAllFoo };
