import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Header from '../../components/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import UserRoute from '../User/routes';
import Login  from '../Login';

export default function index() {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Header />
            <Switch>
                <Route path='/'exact >Hello </Route>
                <Route path='/users' children={props => <UserRoute {...props} />} exact />
                <Route path= '/login' exact component={Login} />
                {/* <Route path='/perimetre' children={props => <PerimetreRoute {...props} />} exact /> */}

            </Switch>
        </BrowserRouter>
    )
}
