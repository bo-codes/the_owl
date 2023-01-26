import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton.js";
import "./Navigation.css";
import BooksContext from "../../../context/books.js";

function Navigation({ isLoaded }) {
  // This is the syntax for bringing the context object of our choosing into a file, and destructing the slice of state
  // calling useContext(BooksContext) will tell react to return the BooksContext which we passed the bookState object into as its value prop
  const { books, setBooks } = useContext(BooksContext);
  // Now you can use this slice of state in this component

  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
