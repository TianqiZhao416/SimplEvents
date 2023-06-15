import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
// import c
// import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
// console.log("lol");
root.render(
  <div>
    <App />
  </div>
  // document.getElementById("root")
);
