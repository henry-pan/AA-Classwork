import React from "react";
import ReactDOM from "react-dom";

import Clock from "./clock";
import Tabs from "./tabs";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  // ReactDOM.render(<App />, root);
  ReactDOM.render(<div>
    <Clock />
    <Tabs array={[{ title: "one", content: "I am the first" }, 
    { title: "two", content: "Second pane here"},
    { title: "three", content: "Third pane here"}]}/>
    </div>, root);
});

// console.log("Webpack is running");
