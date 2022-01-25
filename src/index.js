import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Navbar from "./components/BookNavbar";
import Edit from "./components/Edit";
import reportWebVitals from "./reportWebVitals";
import { BookProvider } from "./context/BookContext";

ReactDOM.render(
  <BookProvider>
    <Router basename="/react-books">
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There is nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  </BookProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
