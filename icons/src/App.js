import React from "react";

import { ReactComponent as Icon } from "./myicon.svg";

import "./App.css";
import "./icons.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ border: "1px dashed white" }}>
          <Icon fill="salmon" width="10rem" />
        </div>
        <div>
          <div style={{ marginTop: "1rem" }}>
            <svg
              width="10rem"
              fill="white"
              style={{ border: "1px dashed pink" }}
            >
              <use href="./icons.svg#bike" />
            </svg>
            <svg
              width="10rem"
              fill="salmon"
              style={{ border: "1px dashed pink" }}
            >
              <use href="./icons.svg#bell" />
            </svg>
            <svg
              width="10rem"
              fill="#55ACEE"
              style={{ border: "1px dashed pink" }}
            >
              <use href="./icons.svg#arrow" />
            </svg>
          </div>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
