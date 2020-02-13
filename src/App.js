import React, { useState } from "react"

import Header from "./components/Header/Header"
import SearchUser from "./components/SearchUser/SearchUser"
import UserList from "./components/UserList/UserList"
import Loading from "./components/Loading/Loading"

import "./App.css"

const App = () => {
    const [username, setUsername] = useState("")
    const [githubUsers, setGithubUsers] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const fetchUser = () => {
        const url = `https://api.github.com/search/users?q=${username}`
        setIsLoading(true)

        fetch(url)
            .then(response => {
                response
                    .json()
                    .then(data => {
                        setGithubUsers(data)
                        setIsLoading(false)
                    })
                    .catch(error => {
                        setError(error)
                        setIsLoading(false)
                    })
            })
            .catch(error => {
                setError(error)
                setIsLoading(false)
            })
    }

    let users = null

    if (isLoading) {
        users = <Loading />
    } else if (githubUsers !== "") {
        users = <UserList githubUsers={githubUsers} error={error} />
    }

    return (
        <div>
            <Header />
            <SearchUser
                setUsername={setUsername}
                username={username}
                fetchUser={fetchUser}
            />
            {users}
        </div>
    )
}

export default App
