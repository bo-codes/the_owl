import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./Pages/ProfilePage/ProfilePage";
import HomePage from "./Pages/HomePage/Homepage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Users from "./Pages/UsersPage/UsersPage";

// CREATE THIS FILE AFTER SETTING UP index.js file
function App() {

  // At any level in a component, jsx doesn't show anything on the browser.
  // jsx simply gives react an instruction.
  // RETURNING the jsx will tell react to execute the instructions which will then create the element and render it.

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
          <Route path="/about">
            <AboutPage />
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
