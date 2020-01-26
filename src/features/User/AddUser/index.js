import React from 'react'
import withAuthenticated from '../../../components/HOC/Authenticated';
function AddUser() {
    return (
        <div>
            Hello from new User
        </div>
    )
}
export default withAuthenticated(AddUser)
