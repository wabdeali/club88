import React from 'react'
import heroImg from '../../imgs/Homepage/4.png'

const Hero = () => {
    return (

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
    )
}

export default Hero
