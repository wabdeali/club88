import React from 'react'

const Services = () => {
    return (
        <section className="service">
            <div className="container-service">
                <h1 className="heading"><span>Our</span> Best Services</h1>
                <p> We provide high standard, quality and guaranteed products </p>
                <div className="card-wrapper">
                    <div className="card">
                        <img src={require("../../imgs/Homepage/3D.png")} alt="" />
                        <h2>3Dimensional Product View</h2>
                        <p>.</p>
                    </div>

                    <div className="card">
                        <img src={require("../../imgs/Homepage/worldwide.png")} alt="" />
                        <h2>Delivery Accross Globe</h2>
                        <p>Global-e. We have partnered with Global-e Ltd who will undertake the order placement,
                    the order and arrange for delivery via an approved carrier.</p>
                    </div>

                    <div className="card">
                        <img src={require("../../imgs/Homepage/reward.png")} alt="" />
                        <h2>Shopping Rewards</h2>
                        <p>For every purchase we offer a credit bonus on the members account which exclusively can
                        be used once for any further shopping with no limited expiry date.
                        Schedule date of delivery according to the customers. With express option i.e within a day.</p>
                    </div>

                    <div className="card">
                        <img src={require("../../imgs/Homepage/delivery.png")} alt="" />
                        <h2>Express Delivery</h2>
                        <p> </p>
                    </div>

                    <div className="card">
                        <img src={require("../../imgs/Homepage/good-quality.png")} alt="" />
                        <h2>100% Original </h2>
                        <p></p>
                    </div>

                    <div className="card">
                        <img src={require("../../imgs/Homepage/support.png")} alt="" />
                        <h2>24/7 Support</h2>
                        <p>Contact for any product queries, issues with My Account or Complains,
                        we can offer help and assistance. Please contact Customer Services by emailing us or call 24/7.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
