import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner';
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
        return <div className="spinner">
            <Loader
                type="TailSpin"
                color="yellow"
                height={100}
                width={100}
            />
        </div>
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                setCurrentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
