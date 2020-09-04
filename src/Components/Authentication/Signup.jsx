import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import SignupDrawing from '../../imgs/signupDrawing.svg'
import { authentication } from '../../config/firebase';
import { AuthContext } from '../Auth'

const Signup = ({ history, ...props }) => {

    const handleSignUp = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await authentication
                    .createUserWithEmailAndPassword(email.value, password.value);
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
                <h1>Sign up</h1>
                <p>Already have an account? <span onClick={() => props.setActivePage('login')}>Login</span></p>
            </div>
            <div className="login-content">
                <div className="login-image">
                    <img src={SignupDrawing} alt="illustration for login" />
                </div>
                <form
                    className="login-form"
                    onSubmit={handleSignUp}>
                    <div className="login-form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email"></input>
                    </div>
                    <div className="login-form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"></input>
                    </div>
                    <div className="login-footer">
                        <button type="submit" className="btn">Sign up</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default withRouter(Signup);