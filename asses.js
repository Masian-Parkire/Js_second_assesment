const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];

    //Write a JavaScript program that performs the following tasks:
//1. Create a function called getAvailableBooks that returns an array of all available
//books.

function getAvailableBooks(books) {
    return books.filter(book => book.isAvailable);
  }


//2. Create a function getBooksByAuthor that takes an author's name as an argument and
//returns an array of all books by that author.
function getBooksByAuthor(theauthor) {
    let list=[]
    let available=theauthor.author
    if (theauthor==author) {
        console.log(list.push(available));
    } else {
        console.log("not available");
    }
    console.log(list)
}
getBooksByAuthor("Charles Dickens")

//3. Create a function addNewBook that takes a book object as an argument and adds it
//to the library, ensuring that the new book has all required properties (title, author,
//publicationYear, and isAvailable).

function addNewBook(book) {
    let newbook= newbook.push(title("Rebirth").push(author("Ngugi Wa Thiong'o")).publicationYear(1980))
    console.log(newbook);
    

}
addNewBook("The river between")

//4. Create a function checkoutBook that takes a book title as an argument and changes
//the book's isAvailable property to false. If the book is not found in the library, the
//function should return a message indicating that the book is not available.
function checkoutBook(title) {
   let bb= booktitle.isAvailable=="false"
   console.log(bb);
}

//5. Create a function returnBook that takes a book title as an argument and changes the
//book's isAvailable property to true. If the book is not found in the library, the function
//should return a message indicating that the book does not belong to the library.
function returnBook(booktitle) {
    booktitle.isAvailable=="true"
   for (let b = 0; b < booktitle.length; b++) {
    if (booktitle==title) {
        console.log("true")
    }
    else{
        console.log("Book does not belong to the library")
    }
   }
   
}
returnBook("Crime and Punishment")