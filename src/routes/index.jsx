import { Route, Switch } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import About from "../pages/About";

function Routes() {
    return (
        <Switch>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
        </Switch>
    );
}

export default Routes;
