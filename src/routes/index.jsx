import { Route, Switch } from "react-router";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

function Routes() {
    return (
        <Switch>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
        </Switch>
    );
}

export default Routes;
