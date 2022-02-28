function findAccountById(accounts, id) {
  for(let item in accounts){
    const account = accounts[item];

    if(account.id === id){
      return account;
    }
  }
}

function sortAccountsByLastName(accounts) {
 const sort = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
 return sort;
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for(let i in books){
    const book = books[i];
    for(let j in book.borrows){
      const borrow = book.borrows[j];
      if(account.id === borrow.id){
        total++;
      }
    }
  }
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  let borrowsArray = [];

  books.forEach((item) => {
    const borrowed = item.borrows;
    const book = {
      id: item.id,
      title: item.title,
      genre: item.genre,
      authorId: item.authorId,
      author: {},
      borrows: {}
    };
    const {id, title, genre, authorId, author, borrows} = book;

    borrowed.forEach((borrow) => {
      if(borrow.id === account.id && borrow.returned === false){
        result.push(book);
        borrowsArray.push(borrow);
        book.author = authors.filter((writer) => writer.id === book.authorId)[0];
        book.borrows = borrowsArray;
      }
    });
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
