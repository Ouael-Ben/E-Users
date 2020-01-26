import React from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import { Provider } from "react-redux";
import Header from '../../components/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import UserRoute from '../User/routes';
import Login  from '../Login';
import store from '../../config/store';
import history from '../../utils/history';

export default function index() {
    return (
        <Router history={history}>
            <Provider store={store}>

                <CssBaseline />
                <Header />
                <Switch>
                    <Route path='/'exact >Hello </Route>
                    <Route path='/users' children={props => <UserRoute {...props} />} />
                    <Route path= '/login' exact component={Login} />
                    {/* <Route path='/perimetre' children={props => <PerimetreRoute {...props} />} exact /> */}

                </Switch>
            </Provider>

        </Router>
    )
}
