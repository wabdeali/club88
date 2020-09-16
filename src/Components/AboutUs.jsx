import React, { useContext } from 'react'
import { AuthContext } from './Auth'
import Culture from './Homepage/Culture';
import Services from './Homepage/Services';
import Team from './Homepage/Team';
import Footer from './Reusable/Footer';
import Navbar from './Reusable/Navbar';

const AboutUs = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            <div style={{
                background: 'black',
            }}>
                {currentUser ? <Navbar logout={true} /> : <Navbar logout={false} />}
            </div>
            <Team />
            <Services />
            <Culture />
            <Footer />
        </>
    )
}

export default AboutUs
