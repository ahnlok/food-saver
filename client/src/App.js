import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Main from "./containers/Main/Main";
import Add from "./containers/Add/Add";
import Edit from "./containers/Edit/Edit";
import NavBar from "./components/Navbar/NavBar"


function App() {
  const [user, setUser] = useState({
    _id: "",
  });

  return (
    <div className="App">
      <Router>
        { <NavBar /> }
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={(props) => <Login {...props} setUser={setUser} />} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/main/new" component={Add} />
          <Route exact path="/main/:id/edit" component={Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
