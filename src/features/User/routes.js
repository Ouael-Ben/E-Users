import React from 'react'
import {Switch, Route} from 'react-router-dom';
import ListUsers from './ListUsers';
import AddUser from './AddUser';

export default function routes() {
    return (
        <Switch>
            <Route path='/users/' exact children={props => <ListUsers {...props} />} />
            <Route path='/users/new' exact children={props => <AddUser {...props} />} />
        </Switch>
    )
}
