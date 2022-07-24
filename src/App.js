import './App.css';
// import Login from './containers/Login/login';
import Login from './containers/Login/Login'
import Parent from './containers/Parent/Parent';
import Homepage from './containers/Homepage/Homepage';
import Admin from './containers/Admin/Admin';
import Activity from './containers/Activity/Activity';
import Register from './containers/Login/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/home" exact>
            <Homepage />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Login />
          </Route>
          <Route path="/parent" exact>
            <Parent />
          </Route>
          <Route path="/admin" exact>
            < Admin />
          </Route>
          <Route path="/activity" exact>
            < Activity />
          </Route>
          {/* <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/detail/:id" exact>
            <Detail />
          </Route> */}
          {/* <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/blog" exact >
            <Blog />
          </Route>
          <Route path="/blog/:id" >
            <Detail />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
