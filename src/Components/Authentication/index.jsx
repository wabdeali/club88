import React, { useCallback } from 'react'
import Login from './Login'

import './loginStyles.scss'
import Signup from './Signup'
import { useState } from 'react'
import { authentication } from '../../config/firebase'

export const Auth = ({ history }) => {
    const [activePage, setActivePage] = useState('login');


    const handleSkip = useCallback(
        async event => {
            event.preventDefault();
            try {
                await authentication
                    .signInWithEmailAndPassword('test@test.com', 'test@test.com');
                history.push('/products')
            } catch (error) {
                console.log(error)
            }
        },
        [history],
    )

    return (
        <>
            <div className="main-container">
                {activePage === 'login' ? <Login setActivePage={setActivePage} history /> : <Signup setActivePage={setActivePage} history />}
                <div className="skipLoginButton" onClick={handleSkip}>
                    <p>Skip for now</p>
                </div>
            </div>
        </>
    )
}