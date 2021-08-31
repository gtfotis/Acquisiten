import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomePage from "./components/HomePage";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <HomePage />
      </Router>
      <footer className="footer">
        <span className="text-muted">
          <a className="apiLink" href="https://otis.codes">
            otis
          </a>{" "}
          |{" "}
          <a className="apiLink" href="https://otis.codes">
            codes
          </a>{" "}
          <a href="https://www.linkedin.com/in/otiswilcox/">
            <img
              className="linkedinlogo"
              alt="linkedin logo"
              src="../images/linkedin-logo.png"
              width="40px"
            ></img>
          </a>{" "}
          |{" "}
          <a href="https://github.com/gtfotis">
            <img
              className="githublogo"
              alt="github logo"
              src="../images/github-logo.png"
              width="40px"
            ></img>
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
