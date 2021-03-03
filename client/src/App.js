
import React, { useState } from 'react' ;

import Welcome from  './forms/Welcome/Welcome';
import Login from './forms/Login';
import Register from './forms/Register/Register';
import Items from './components/Items';
import CredentialsContext from './util/Test';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"



const App = () => {
  const credentialsState = useState(null);
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
            <Route exact path="/"><Welcome />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/items">
              <Items />
            </Route>
          </Switch>
        </Router>
      </CredentialsContext.Provider>
    </div>
  )
}
export default App;