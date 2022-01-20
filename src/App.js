import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";
import "./App.css";
import { BookContext } from "./context/BookContext";
import AddModal from "./components/AddModal";

const App = () => {
  const { books, deleteBook } = useContext(BookContext);

  const [showAddBook, setShowAddBook] = useState(false);
  const hideAddModal = () => setShowAddBook(false);
  const showAddModal = () => setShowAddBook(true);

  return (
    <div className="main-container">
      <div className="header-container">
        <span>
          <h4 className="header-name">Ten famous books</h4>
          <h5 className="header-text">
            You can add books to the table, edit them or delete book from the
            table.
          </h5>
          <Button className="add-book-btn" onClick={showAddModal}>
            Add
          </Button>
          <br />
          <AddModal
            show={showAddBook}
            onHide={hideAddModal}
            onClick={hideAddModal}
          />
        </span>
      </div>
      <Table striped bordered hover id="table_id" variant="dark" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Country</th>
            <th>Language</th>
            <th>Link</th>
            <th>Pages</th>
            <th>Year</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            <>
              {books.map((book) => (
                <tr key={book.id}>
                  <td className="row-id" data-label="row">
                    {book.id}
                  </td>
                  <td data-label="title">{book.title}</td>
                  <td data-label="author">{book.author}</td>
                  <td data-label="county">{book.country}</td>
                  <td data-label="language">{book.language}</td>
                  <td data-label="link">
                    <a href={book.link} target="_blank" rel="noreferrer">
                      {book.link}
                    </a>
                  </td>
                  <td data-label="pages">{book.pages}</td>
                  <td data-label="year">{book.year}</td>
                  <td data-label="edit">
                    <Link to={`/edit/${book.id}`}>
                      <Button className="edit-btn">Edit</Button>
                    </Link>
                  </td>
                  <td data-label="delete">
                    <Button
                      className="delete-btn"
                      onClick={() => deleteBook(book.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <td className="no-data">
                <p>No Books. Table is empty.</p>
                <p>Refresh the browser to restore the books!</p>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default App;
