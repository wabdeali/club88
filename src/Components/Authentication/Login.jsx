import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import LoginDrawing from '../../imgs/loginDrawing.svg'
import { authentication } from '../../config/firebase'
import { AuthContext } from '../Auth'

const Login = ({ history, ...props }) => {

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await authentication
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/products')
            } catch (error) {
                alert(error)
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
                    <div className="login-footer">
                        <button type="submit" className="btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default withRouter(Login);