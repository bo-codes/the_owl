import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";


// the function below from react-dom will execute and cause the browser to render all of our jsx (compiled and organzed in our App.js function component)
// it will be rendered in the index.html file at the div where id='root'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
