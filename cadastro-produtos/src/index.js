import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import "bootswatch/dist/flatly/bootstrap.min.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
