import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Form, Modal, InputGroup, FormControl } from "react-bootstrap"; //InputGroup,
import "../App.css";
import { BookContext } from "../context/BookContext";
import { iconPencil, iconPencilFill, iconLink } from "./Icons"; //iconArchive,

const AddModal = (props) => {
  const { addBook, books } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [link, setLink] = useState("");
  const [pages, setPages] = useState("");
  const [year, setYear] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: books.length + 1,
      title,
      author,
      country,
      language,
      link,
      pages,
      year,
    };
    if (title === "" || author === "" || country === "") {
      alert("Title, Author and Country must not be empty.");
      return false;
    }
    if (isNaN(pages) || isNaN(year)) {
      alert("Pages and Year must be number.");
      return false;
    }
    addBook(newBook);

    // Empty input fields after adding book
    setTitle("");
    setAuthor("");
    setCountry("");
    setLanguage("");
    setLink("");
    setPages("");
    setYear("");

    props.onHide();
  };

  return (
    <>
      <Modal
        className="add-modal"
        show={props.show}
        onHide={props.onHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            <span className="add-modal-title">Add Book information:</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form name="add-form">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                {iconPencil}
                <span className="must-add">*</span>
              </InputGroup.Text>
              <FormControl
                placeholder="Enter book's title"
                aria-label="Title"
                aria-describedby="basic-addon1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
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
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                {iconPencilFill}
              </InputGroup.Text>
              <FormControl
                placeholder="Enter language of the book"
                aria-label="Language"
                aria-describedby="basic-addon1"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">{iconLink}</InputGroup.Text>
              <FormControl
                placeholder="Enter book web link"
                aria-label="Link"
                aria-describedby="basic-addon1"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">{iconPencil}</InputGroup.Text>
              <FormControl
                placeholder="Enter number of the pages"
                aria-label="Pages"
                aria-describedby="basic-addon1"
                value={pages}
                onChange={(e) => setPages(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                {iconPencilFill}
              </InputGroup.Text>
              <FormControl
                placeholder="Enter publication year"
                aria-label="Year"
                aria-describedby="basic-addon1"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-primary cancel-modal-btn"
            onClick={props.onClick}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary add-modal-btn"
            onClick={onSubmit}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

AddModal.propTypes = {
  onHide: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  show: PropTypes.bool,
};

export default AddModal;
