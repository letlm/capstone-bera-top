import { Route, Switch } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Beer from "../pages/Beer";
import Suggest from "../pages/Suggest";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/suggest">
        <Suggest />
      </Route>
      <Route exact path="/:id">
        <Beer />
      </Route>
    </Switch>
  );
}

export default Routes;
