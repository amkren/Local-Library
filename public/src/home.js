function getTotalBooksCount(books) {
  let total = 0;
  for(let book in books){
    total++;
  }
  return total;
}

function getTotalAccountsCount(accounts) {
  let total = 0;
  for(let account in accounts){
    total++;
  }
  return total;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  for(let i = 0; i < books.length; i++){
    const book = books[i];
    for(let j = 0; j < book.borrows.length; j++){
      const borrow = book.borrows[j];
      if(borrow.returned === false){
        total++;
      }
    }
  }
  return total;
}

function getMostCommonGenres(books) {
  const bookGenres = books.map((book) => book.genre);
  const temp = [];
  bookGenres.map((genre) => {
    const genreLocation = temp.findIndex((element) => element.name === genre);
    if (genreLocation >= 0) {
      temp[genreLocation].count = temp[genreLocation].count + 1;
    } else {
      temp.push({ name: genre, count: 1 });
    }
  });
  temp.sort((a, b) => b.count - a.count);
  if (temp.length > 5) {
    return temp.slice(0, 5);
  }
  return temp;
}

function getMostPopularBooks(books, count=5) {
  const borrows = books.map(book=>({name:book.title, count:book.borrows.length}));
  borrows.sort((a,b) => b.count - a.count);
  return borrows.slice(0,count);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
  let foundAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
  };
  books.forEach((book) => {
    if (book.authorId === author.id) {
    foundAuthor.count += book.borrows.length;
    }
  });
  result.push(foundAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
