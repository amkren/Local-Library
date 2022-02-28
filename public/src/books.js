function findAuthorById(authors, id) {
  for(let i = 0; i < authors.length; i++){
    const author = authors[i]; // the current author
    if(author.id === id){
      return author; // if the given id matches that of an author id return that author
    }
  }
}

function findBookById(books, id) {
  for(let i in books){
    const book = books[i];
    if(book.id === id){
      return book;
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = [];
  let borrowedBooks = [];
  let allBooks = [];

  books.forEach((book) => {
    const returned = book.borrows[0].returned;

    if(returned ? borrowedBooks.push(book) : returnedBooks.push(book));
  });
  allBooks.push(returnedBooks);
  allBooks.push(borrowedBooks);
  return allBooks;
}

function getBorrowersForBook(book, accounts) {
  let result = [];

    let borrows = book.borrows;
    borrows.forEach(borrow => {
      if(result.length < 10){
        let account = accounts.find((account) => account.id === borrow.id);
        let user = account;
        user['returned'] = borrow.returned;
        result.push(user);
      }
  });
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
