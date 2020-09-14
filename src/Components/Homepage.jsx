import React, { useContext } from 'react'
import heroImg from '../imgs/Homepage/4.png'
import ceoImg from '../imgs/Homepage/ceo.jpg'
import Navbar from './Reusable/Navbar'

import { AuthContext } from './Auth'

function Homepage() {

    const { currentUser } = useContext(AuthContext);
    console.log(currentUser)
    return (
        <div style={{ backgroundColor: 'rgb(199, 160, 61)', }}>
            <header>

                {currentUser ? <Navbar logout={true} /> : <Navbar logout={false} />}

                <div className="hero">
                    <div className="left">
                        <img src={heroImg} alt="" />
                    </div>

                    <div className="right">
                        <h6>CLUB88<br /></h6>
                        <h1>Qualite<span>Superieure</span></h1><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus ratione eveniet
                        ea suscipit fugiat id nam in laudantium eius dolores officiis iure sunt odio maiores quos ad,
                        voluptas sint!
                        </p>
                    </div>
                </div>
            </header>

            <section className="ceo">
                <div className="container-ceo">
                    <div className="ceo-img">
                        <img src={ceoImg} alt="" />
                    </div>

                    <div className="ceo-right">
                        <h1>CEO</h1><br />
                        <h3>Hello I am ceo</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                        illum quaerat at dolorem sit iusto rerum accusamus, doloribus neque voluptatem expedita
          voluptates. Natus ipsam fugit aperiam nemo veniam dicta consequuntur.</p>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                        illum quaerat at dolorem sit iusto rerum accusamus, doloribus neque voluptatem expedita
          voluptates. Natus ipsam fugit aperiam nemo veniam dicta consequuntur.</p>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Homepage
