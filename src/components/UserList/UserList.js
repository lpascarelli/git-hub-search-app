import React from "react"

import User from "./User/User"
import UserNotFound from "./UserNotFound/UserNotFound"

import "./UserList.css"

const UserList = props => {
    let users = null

    users =
        props.error || props.githubUsers.items.length === 0 ? (
            <UserNotFound error={props.error} />
        ) : (
            props.githubUsers.items.map(user => {
                return <User key={user.id} user={user} />
            })
        )

    return <div>{users}</div>
}

export default UserList
