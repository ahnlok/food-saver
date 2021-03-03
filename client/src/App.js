import React, { useState } from "react";

import LoginInView from "./components/views/LoginInView";
import AddItemView from "./components/views/AddItemView";

import IndexView from "./components/views/IndexView";
import NotFoundView from "./components/views/NotFoundView";
import UnauthorizedView from "./components/views/UnauthorizedView";
import SignupView from "./components/views/SignupView";
import Items from "./components/Items"
import CredentialsContext from "./util/Test"

import Signup2 from './components/views/Signup2'
import "./components/scripts";
import "./components/styles";
import "./components/views";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



const App = () => {
  const credentialState = useState(null);
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const setCredential = (id, username, password) => {
    setId(id)
    setUsername(username)
    setPassword(password)
  }
  return (
    <div className="App">
      <CredentialsContext.Provider value={{id, username, password, setCredential}}>
        <Router>
          <Switch>
            <Route exact path="/">
              <IndexView />
            </Route>
            <Route exact path="/register">
              <Signup2 />
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
            <Route exact path="/items">
              <Items />
            </Route>
          </Switch>
        </Router>
      </CredentialsContext.Provider>
    </div>
  );
};
export default App;
