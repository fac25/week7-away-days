import React, { useState, useEffect, createContext } from 'react'

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, [])

    return (
        <UserContext.Provider value={{user}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider