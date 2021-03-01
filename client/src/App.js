
import React, { useState } from 'react' ;

import Welcome from  './forms/Welcome';
import Login from './forms/Login';
// import Register from './forms/Register'
import SignupView from './components/views/SignupView'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

export const CredentialsContext = React.createContext();

const App = () => {
  const credentialsState = useState(null);

  return (
    <div className="App">
      <CredentialsContext.Provider value={credentialsState}>
        <Router>
          <Switch>
            <Route exact path="/"><Welcome />
            </Route>
            <Route exact path="/register">
              <SignupView />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </CredentialsContext.Provider>
    </div>
  )
}
export default App;