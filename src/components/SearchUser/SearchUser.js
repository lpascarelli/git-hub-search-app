import React from "react"

import "./SearchUser.css"

const SearchUser = props => {
    const handleSubmit = event => {
        event.preventDefault()
        props.fetchUser()
    }

    return (
        <div className="search-container">
            <form onSubmit={event => handleSubmit(event)}>
                <input
                    type="text"
                    className="w-80"
                    placeholder="Username..."
                    onChange={event => props.setUsername(event.target.value)}
                    onKeyPress={event =>
                        event.which === 13 && event.target.value !== ""
                            ? handleSubmit(event)
                            : null
                    }
                />
                <button
                    type="submit"
                    className="search-button"
                    disabled={!props.username}
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchUser
