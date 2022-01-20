import React from "react";
import { Navbar } from "react-bootstrap";
import "../App.css";
import penguin from "../img/penguin.png";

let BookNavbar = () => {
  return (
    <Navbar className="navbar-custom" variant="light">
      <Navbar.Brand
        className="navbar-brand mx-auto"
        href="#home"
        style={{
          color: "rgba(159, 90, 253, 1 )",
          fontWeight: "bolder",
          fontSize: "larger",
        }}
      >
        React - Book Table
        <img src={penguin} className="App-logo" alt="logo" />
      </Navbar.Brand>
      {/* <Nav className="mr-auto link">
                <Nav.Link href="#features">
                </Nav.Link>
            </Nav> */}
    </Navbar>
  );
};

export default BookNavbar;
