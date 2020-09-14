import React from 'react'
import { authentication } from '../../config/firebase'

const Navbar = ({ logout }) => {
    return (
        <div className="navContainer">
            <h1>CLUB88</h1>
            <nav>
                <ul>
                    <li><a href="_blank">AboutUs</a></li>
                    <li><a href="/products">Shop</a></li>
                    <li><a href="_blank">Profile</a></li>
                    {logout && <li onClick={() => authentication.signOut()}
                        style={{
                            display: 'inline-block',
                            padding: '15px 30px',
                            textAlign: 'center',
                            color: 'yellow',
                            textDecoration: 'none',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                        }}>
                        Sign out
                    </li>}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
