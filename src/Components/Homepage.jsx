import React from 'react'

function Homepage() {
    return (
        <div style={{ backgroundColor: 'rgb(199, 160, 61)', }}>
            <header>
                <div className="navContainer">
                    <h1>CLUB88</h1>
                    <nav>
                        <ul>
                            <li><a href="_blank">AboutUs</a></li>
                            <li><a href="/products">Shop</a></li>
                            <li><a href="_blank">Profile</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="hero">
                    <div className="left">
                        <img src={require('../imgs/4.png')} alt="" />
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
                        <img src={require('../imgs/ceo.jpg')} alt="" />
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
