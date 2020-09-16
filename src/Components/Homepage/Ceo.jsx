import React from 'react'
import ceoImg from '../../imgs/Homepage/ceo.jpg'

const Ceo = () => {
    return (
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
    )
}

export default Ceo
