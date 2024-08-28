import { defineCustomElements } from "@workspace/components/loader";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

defineCustomElements(window);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
