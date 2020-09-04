import React, { useState, useEffect } from 'react'
import { authentication } from '../config/firebase'

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true)

    useEffect(() => {
        authentication.onAuthStateChanged(setCurrentUser);
        authentication.onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)
        });
    }, [])

    if (pending) {
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
