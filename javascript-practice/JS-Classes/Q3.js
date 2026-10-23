const readline = require("readline");

// Create a Book class
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log("Book is already issued.");
        } else {
            this.isIssued = true;
            console.log("Book issued successfully.");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log("Book returned successfully.");
    }
}

// Create book objects
const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Learn Java", "David", "102"),
    new Book("Python Guide", "Alex", "103")
];

// Display available books
console.log("Available books:");
books.filter(book => !book.isIssued)
    .forEach(book => console.log(`${book.title} - ISBN: ${book.ISBN}`));

// Search and issue a book by ISBN
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter ISBN to issue a book: ", isbn => {
    const book = books.find(book => book.ISBN === isbn.trim());

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found.");
    }

    console.log("\nUpdated book list:");
    books.forEach(book => {
        console.log(`${book.title} | Issued: ${book.isIssued}`);
    });

    rl.close();
});