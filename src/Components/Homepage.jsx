import React, { useContext } from 'react'
import Navbar from './Reusable/Navbar'

import { AuthContext } from './Auth'
import Footer from './Reusable/Footer'
import Hero from './Homepage/Hero'
import Ceo from './Homepage/Ceo'
import Services from './Homepage/Services'
import Team from './Homepage/Team'
import Culture from './Homepage/Culture'

function Homepage() {

    const { currentUser } = useContext(AuthContext);

    return (
        <>
            <div>
                <header>

                    {currentUser ? <Navbar logout={true} /> : <Navbar logout={false} />}

                    <Hero />
                </header>
                <Ceo />
                <Services />
                <Team />
                <Culture />
            </div>
            <Footer />
        </>
    )
}

export default Homepage
