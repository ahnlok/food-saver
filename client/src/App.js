import React, { useState } from "react";

import LoginInView from "./components/views/LoginInView";
import AddItemView from "./components/views/AddItemView";
import helpers from "./components/views/helpers";
import IndexView from "./components/views/IndexView";
import NotFoundView from "./components/views/NotFoundView";
import UnauthorizedView from "./components/views/UnauthorizedView";
import SignupView from "./components/views/SignupView";

import "./components/scripts";
import "./components/styles";
import "./components/views";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const CredentialsContext = React.createContext();

const App = () => {
  const credentialsState = useState(null);

  return (
    <div className="App">
      <CredentialsContext.Provider value={credentialsState}>
        <Router>
          <Switch>
            <Route exact path="/">
              <IndexView />
            </Route>
            <Route exact path="/register">
              <SignupView />
            </Route>
            <Route exact path="/LoginInView">
              <LoginInView />
            </Route>
            <Route exact path="/AddItemView">
              <AddItemView />
            </Route>
            <Route exact path="/NotFoundView">
              <NotFoundView />
            </Route>
            <Route exact path="/UnauthorizedView">
              <UnauthorizedView />
            </Route>
            <Route exact path="/helpers">
              <helpers />
            </Route>
          </Switch>
        </Router>
      </CredentialsContext.Provider>
    </div>
  );
};
export default App;
