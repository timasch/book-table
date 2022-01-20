import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, InputGroup, FormControl } from "react-bootstrap"; //, InputGroup
import "../App.css";
import { BookContext } from "../context/BookContext";
import { iconPencil, iconPencilFill, iconLink } from "./Icons";
//import e from 'cors';

const Edit = (props) => {
  let navigate = useNavigate();
  let { id } = useParams();

  const { books, editBook } = useContext(BookContext);
  const [selectedBook, setSelectedBook] = useState({
    id: null,
    title: "",
    author: "",
    country: "",
    language: "",
    link: "",
    pages: "",
    year: "",
  });

  const currentBookId = id;

  useEffect(() => {
    const bookId = currentBookId;
    const selectedBook = books.find(
      (currentBookTraversal) => currentBookTraversal.id === parseInt(bookId)
    );
    setSelectedBook(selectedBook);
  }, [currentBookId, books]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      selectedBook.title === "" ||
      selectedBook.author === "" ||
      selectedBook.country === ""
    ) {
      alert("Title, Author and Country must not be empty.");
      return false;
    }
    if (isNaN(selectedBook.pages) || isNaN(selectedBook.year)) {
      alert("Pages and Year must be number.");
      return false;
    }
    editBook(selectedBook);
    navigate("/");
  };

  const handleOnChange = (bookKey, newValue) =>
    setSelectedBook({ ...selectedBook, [bookKey]: newValue });

  if (!selectedBook || !selectedBook.id) {
    return <div>Invalid Book ID.</div>;
  }

  return (
    <>
      <center>
        <h4 className="edit-title">Edit book information:</h4>
      </center>
      <Form onSubmit={onSubmit} className="edit-form">
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            {iconPencil}
            <span className="must-add">*</span>
          </InputGroup.Text>
          <FormControl
            placeholder="Enter book's title"
            aria-label="Title"
            aria-describedby="basic-addon1"
            value={selectedBook.title}
            onChange={(e) => handleOnChange("title", e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            {iconPencilFill}
            <span className="must-add">*</span>
          </InputGroup.Text>
          <FormControl
            placeholder="Enter book's author"
            aria-label="Author"
            aria-describedby="basic-addon1"
            value={selectedBook.author}
            onChange={(e) => handleOnChange("author", e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            {iconPencil}
            <span className="must-add">*</span>
          </InputGroup.Text>
          <FormControl
            placeholder="Enter author's country"
            aria-label="Country"
            aria-describedby="basic-addon1"
            value={selectedBook.country}
            onChange={(e) => handleOnChange("country", e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">{iconPencilFill}</InputGroup.Text>
          <FormControl
            placeholder="Enter language of the book"
            aria-label="Language"
            aria-describedby="basic-addon1"
            value={selectedBook.language}
            onChange={(e) => handleOnChange("language", e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">{iconLink}</InputGroup.Text>
          <FormControl
            placeholder="Enter book web link"
            aria-label="Link"
            aria-describedby="basic-addon1"
            value={selectedBook.link}
            onChange={(e) => handleOnChange("link", e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">{iconPencil}</InputGroup.Text>
          <FormControl
            placeholder="Enter number of the pages"
            aria-label="Pages"
            aria-describedby="basic-addon1"
            value={selectedBook.pages}
            onChange={(e) => handleOnChange("pages", e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">{iconPencilFill}</InputGroup.Text>
          <FormControl
            placeholder="Enter publication year"
            aria-label="Year"
            aria-describedby="basic-addon1"
            value={selectedBook.year}
            onChange={(e) => handleOnChange("year", e.target.value)}
          />
        </InputGroup>
        <div className="edit-btn-group">
          <button
            type="button"
            className="btn btn-primary cancel-modal-btn"
            onClick={props.onClick}
          >
            <Link className="cancel-edit-btn" to="/">
              Cancel
            </Link>
          </button>
          <button type="submit" className="btn btn-primary edit-modal-btn">
            Save
          </button>
        </div>
      </Form>
    </>
  );
};

Edit.propTypes = {
  onClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
};

export default Edit;
