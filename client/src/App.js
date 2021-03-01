
import React, { useState } from 'react' ;

import LoginInView from './components/views/LoginInView' ;
// import Login from './forms/Login';

import SignupView from './components/views/SignupView'
import "./components/scripts"
import "./components/styles"
import "./components/views"

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
            <Route exact path="/LoginInView">
              <LoginInView />
            </Route>
          </Switch>
        </Router>
      </CredentialsContext.Provider>
    </div>
  )
}
export default App;