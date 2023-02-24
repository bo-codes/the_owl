// import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { Provider } from "./Context/books";
// import BooksContext from "./Context/books";
import "./index.css";
import { store } from "./Store";
import { Provider } from "react-redux";

// the function below from react-dom will execute and cause the browser to render all of our jsx (compiled and organzed in our App.js function component)
// it will be rendered in the index.html file at the div where id='root'
// ReactDOM.render(
//   // <React.StrictMode>

//   // We are wrapping our entire application with the BooksContext that we built and imported from our context folder
//   // so that our entire application has access to the values stored in this context

//   // THIS VERSION OF THE CODE IS FOR OUR ORIGINAL CONTEXT PROVIDER WHERE WE ONLY PASS IN A VALUE AS A PROP AND NOT A SLICE OF STATE
//   // <BooksContext.Provider value={'bobook'}>
//   //   <App />
//   // </BooksContext.Provider>,

//   // THIS VERSION OF THE CODE IS FOR US TO PASS IN OUR PROVIDER COMPONENT WE CREATED IN TEH CONTEXT FILE AND WRAP THE APP WITH IT INSTEAD OF THE CONTEXT.PROVIDER
//   // US BUILDING THE PROVIDER IN THE AFFOREMENTIONED CONTEXT FILE ALLOWS US TO INCLUDE A SLICE OF STATE IN IT AND PASS THAT SLICE OF STATE (BOTH VARIABLE AND FUNCTION TO UPDATE THE VARIABLE)
//   // INTO OTHER COMPONENTS
//   <Provider>
//     <App />
//   </Provider>,

//   // REFER TO NAVIGATION.JS TO SEE HOW CONTEXT IS IMPORTED AND IMPLEMENTED

//   // </React.StrictMode>,

//   // pulling the div with id root from index.html file
//   document.getElementById("root")
// );

// ----------- CAN ALSO BE WRITTEN AS ----------- //

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
