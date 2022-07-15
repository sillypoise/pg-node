// * Mocking a DB connection of authors
let authors = [
    {
        id: 1,
        name: "JK Rowling",
        books: [
            {
                id: 10,
                title: "Harry Potter 1",
                author: "JK Rowling",
                isLoaned: false,
                price: 9.99,
                cover: "hardcover",
            },
            {
                id: 11,
                title: "Harry Potter 2",
                author: "JK Rowling",
                isLoaned: false,
                price: 9.99,
                cover: "softcover",
            },
        ],
    },
    {
        id: 2,
        name: "Julio Cortazar",
        books: [
            {
                id: 12,
                title: "Rayuela",
                author: "Julio Cortazar",
                isLoaned: false,
                price: 15.99,
                cover: "softcover",
            },
        ],
    },
];

// * Data Modeling Functions, real-life scenario they would perform async ops like requesting to other services
async function getAllAuthors() {
    let authorsArray = await [...authors];
    return authorsArray;
}

async function getAuthorById(id: number) {
    let authorsArray = await [...authors];
    return authorsArray.find((author) => author.id === Number(id));
}

export { getAllAuthors, getAuthorById };
