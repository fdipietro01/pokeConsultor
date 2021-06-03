import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "../views/Home/Home";
import {Error404} from "../views/Error/Error404";
import {PokeDetail} from "../views/PokeDetail/PokeDetail"

export const Routes = ()=>{

    return(
    <Router>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
    
            <Route path="/pokemon/:id">
                <PokeDetail/>
            </Route>
            
            <Route>
                <Error404/>
            </Route>
            
        </Switch>

    </Router>
    )
}