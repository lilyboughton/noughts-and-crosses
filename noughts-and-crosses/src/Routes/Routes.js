import { Switch, Route } from 'react-router-dom';
import NotFound from '../Components/Pages/NotFound/NotFound';
import HomePage from "../Components/Pages/HomePage/HomePage";


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
};

export default Routes;
