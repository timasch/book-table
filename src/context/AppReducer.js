const appReducer = (state, action) => {
  switch (action.type) {
    /* ADD_BOOK will take a payload value containing new book
         and return the updated book state. */
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    /* EDIT_BOOK will take a payload value 
        and compare the id with the books - 
        if it finds a match, 
        it will use the new payload values 
        and return the updated book state. */
    case "EDIT_BOOK": {
      const updatedBook = action.payload;

      const updatedBooks = state.books.map((book) => {
        if (book.id === updatedBook.id) {
          return updatedBook;
        }
        return book;
      });

      return {
        ...state,
        books: updatedBooks,
      };
    }
    /* DELETE_BOOK will take a payload value 
        and compare the id with the books - 
        if it finds a match, 
        it will remove that book 
        and return the updated book state. */
    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    default:
      return state;
  }
};

export default appReducer;
