import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-items">
                    <h1>CLUB88</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Alias neque tenetur accusamus! Enim cupiditate praesentium </p>
                </div>
                <div className="footer-items">
                    <h2>Company</h2>
                    <div className="border"></div>
                    <ul>
                        <a href="_blank">
                            <li>Partners With Us</li>
                        </a>
                        <a href="_blank">
                            <li>Our Team</li>
                        </a>
                        <a href="_blank">
                            <li>Life at Club88</li>
                        </a>
                        <a href="_blank">
                            <li>Portfolio</li>
                        </a>
                        <a href="_blank">
                            <li>Progress</li>
                        </a>
                    </ul>
                </div>

                <div className="footer-items">
                    <h2>Services</h2>
                    <div className="border"></div>
                    <ul>
                        <a href="_blank">
                            <li>Premium Membership </li>
                        </a>
                        <a href="_blank">
                            <li>Express Delivery</li>
                        </a>
                        <a href="_blank">
                            <li>Quality Certified Products</li>
                        </a>
                        <a href="_blank">
                            <li>Club Membership</li>
                        </a>
                        <a href="_blank">
                            <li>Return Policy</li>
                        </a>
                    </ul>
                </div>

                <div className="footer-items">
                    <h2>Customer Support</h2>
                    <div className="border"></div>
                    <ul>
                        <li><i className="fa fa-map-marker" aria-hidden="true">Bangalore-560072, <br />Karnataka, India</i></li>
                        <li><i className="fa fa-phone" aria-hidden="true"> +919574078295 (India)</i></li>
                        <li><i className="fa fa-envelope-open" aria-hidden="true"> enquiry.club88@gmail.com</i></li>
                    </ul>

                    <div className="social-icon">
                        <a href="_blank"> <i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                        <a href="_blank"> <i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                        <a href="_blank"> <i className="fa fa-google-plus-square" aria-hidden="true"></i></a>
                        <a href="_blank"> <i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                Copyright &copy; CLUB88 2015. All rights reserved.
                </div>
        </footer>
    )
}

export default Footer
