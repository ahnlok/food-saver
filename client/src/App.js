import Navbar from "./components/Navbar/navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./page/Register";
import Login from "./page/Login.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Navbar/>
            <Route exact path="/login.js" component={Login} />
            <Route exact path="/Register" component={Register} />
  

        </Switch>
          

      </Router>

   <h1>Hello!!</h1>
    </div>
  );
}

export default App;
