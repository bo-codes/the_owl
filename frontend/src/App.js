import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Users from "./components/Users";
import Profile from "./components/Profile";
import HomePage from "./components/HomePage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* specific navlink component for organization */}
        {/* <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/users">
          Users
        </NavLink> */}

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route path="/users:userId">
            <Profile />
          </Route>
          <Route>
            <h1>404: wrong page goofy</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
