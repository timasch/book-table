import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import appReducer from "./AppReducer";
import initialState from "../data/initialState";

export const BookContext = createContext(initialState);

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addBook = (book) => {
    dispatch({
      type: "ADD_BOOK",
      payload: book,
    });
  };

  function editBook(book) {
    dispatch({
      type: "EDIT_BOOK",
      payload: book,
    });
  }

  function deleteBook(id) {
    dispatch({
      type: "DELETE_BOOK",
      payload: id,
    });
  }

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        addBook,
        editBook,
        deleteBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

// Anything that can be rendered: numbers, strings, elements or an array
// (or fragment) containing these types.
//  => PropTypes.node
BookProvider.propTypes = {
  children: PropTypes.element,
};
