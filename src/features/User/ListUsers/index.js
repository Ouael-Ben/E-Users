import React from 'react'
import withAuthenticated from '../../../components/HOC/Authenticated';

function ListUsers() {
    return (
        <div>
            Hello from list Users
        </div>
    )
}

export default withAuthenticated(ListUsers)