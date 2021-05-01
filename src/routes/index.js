import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "../views/Home";
import {Error404} from "../views/Error404.js";

export const Routes = ()=>{

    return(
    <Router>
        <Switch>
            <Route>
                <Home exact path="/"/>
            </Route>
            <Route>
                <Error404/>
            </Route>
        </Switch>

    </Router>
    )
}