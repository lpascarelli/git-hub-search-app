import React from "react"

import "./User.css"

const User = props => (
    <div className="user-container">
        <div className="user-data">
            <img
                className="avatar-url"
                src={props.user.avatar_url}
                alt=""
            ></img>
            <div className="user-information">
                <p>Username: {props.user.login}</p>
                <p>
                    Url:&nbsp;
                    <a href={props.user.html_url} target="__blank">
                        {props.user.html_url}
                    </a>
                </p>
                <p>Score: {props.user.score}</p>
            </div>
        </div>
    </div>
)

export default User
