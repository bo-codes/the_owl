import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Users from "./components/Users";
import Profile from "./components/Profile";
import HomePage from "./components/HomePage/Homepage";

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
          <Route>
            <h1>404: wrong page goofy</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
