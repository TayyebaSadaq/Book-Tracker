// Array to store books
let books = [];

// Modify the book object to include title, author, and type
function addBook() {
    const titleElement = document.getElementById('bookTitle');
    const authorElement = document.getElementById('bookAuthor');
    const typeElement = document.getElementById('bookType');

    const title = titleElement.value.trim();
    const author = authorElement.value.trim();
    const type = typeElement.value;

    if (title !== '' && author !== '') {
        // Create a book object
        const book = {
            title: title,
            author: author,
            type: type
        };

        // Add book to array
        books.push(book);

        // Update the book list on the web page
        updateBookList();

        // Clear the input fields
        titleElement.value = '';
        authorElement.value = '';
    }
}

// Function to remove a book
function removeBook(index) {
    // Remove book from array
    books.splice(index, 1);

    // Update the book list on the web page
    updateBookList();
}

// Function to update the book list on the web page
function updateBookList() {
    const bookListElement = document.getElementById('bookList');

    // Clear existing list
    bookListElement.innerHTML = '';

    // Add each book to the list
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>Title: ${book.title}</span>
            <span>Author: ${book.author}</span>
            <span>Type: ${book.type}</span>
            <button onclick="removeBook(${index})">Remove</button>
        `;
        bookListElement.appendChild(li);
    });
}