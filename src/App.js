import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Components/Home';
import Users from './Components/Users';
import User from './Components/User';
import {
  userRoute,
  usersRoute,
} from './Data/ClientRoutes';

export default function OliverTakeHome() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path={usersRoute}>
            <Users />
          </Route>
          <Route exact path={userRoute}>
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
