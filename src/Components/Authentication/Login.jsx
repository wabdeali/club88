import React, { useCallback, useContext, useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import LoginDrawing from '../../imgs/Authentication/loginDrawing.svg'
import { authentication } from '../../config/firebase'
import { AuthContext } from '../Auth'

const Login = ({ history, ...props }) => {
    const [showError, setShowError] = useState(false)

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await authentication
                    .signInWithEmailAndPassword(email.value, password.value);
                console.log('login successful');
                history.push('/products')
            } catch (error) {
                setShowError(true)
            }
        },
        [history],
    )

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/products" />;
    }

    return (
        <div className="login-base-container">
            <div className="login-header">
                <h1>Login</h1>
                <p>Do not have an account? <span onClick={() => props.setActivePage('signup')}>Sign up</span></p>
            </div>
            <div className="login-content">
                <div className="login-image">
                    <img src={LoginDrawing} alt="illustration for login" />
                </div>
                <form
                    className="login-form"
                    onSubmit={handleLogin}
                >
                    <div className="login-form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email"></input>
                    </div>
                    <div className="login-form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"></input>
                    </div>
                    {
                        showError && <div className="errorMessage">Incorrect email or password</div>
                    }
                    <div className="login-footer">
                        <button type="submit" className="btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default withRouter(Login);