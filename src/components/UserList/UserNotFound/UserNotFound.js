import React from "react"

import icon from "../../../assets/img/github-icon.svg"
import "./UserNotFound.css"

const UserNotFound = props => {
    let error = props.error !== "" ? props.error : "User Not Found"

    return (
        <div className="error-container">
            <img className="icon-error" src={icon} alt=""></img>
            <p>{error}</p>
        </div>
    )
}

export default UserNotFound
