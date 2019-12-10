import React from "react";

import { ReactComponent as Icon } from "./myicon.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ border: "1px dashed white" }}>
          <Icon fill="salmon" width="10rem" />
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
