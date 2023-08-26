import React from 'react'
import "../../css/Footer/CSS_footer.css"
import {Button} from "react-bootstrap"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Footer = () => {
    return (
        <div className="footer-container">

            <div className="footer-content">

                <div className="footer-store-description-container">
                    <div className="footer-store-description">
                        <div className="store-name">
                            <h4>Local Grocer</h4>
                        </div>
                        <div className="store-description">

                        </div>
                    </div>
                </div>


                <div className="category-1">
                    <h5>MyGrocer</h5>
                    <ol className="footer-categories-list">
                        <li>Online Flyer</li>
                        <li>My LG card</li>
                        <li>Gift Cards</li>
                    </ol>
                </div>

                <div className="category-2">
                    <h5>Contact</h5>
                    <ol className="footer-categories-list">
                        <li>History</li>
                        <li>Locations</li>
                        <li>About us</li>

                    </ol>
                </div>

                <div className="footer-newsletter">

                    <p id="responsive-newsletter">Stay up to date with our latest sales</p>
                    <p className="subscribe-newsletter">Subcribe to our Newsletter!</p>

                    <div className="email-newsletter-container">
                        <input className="email-input-newsletter" type="text" placeholder="Email address"></input>
                        {/* <i className="email-input-button"><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline></i> */}
                        <Button className="newsletter-signup-btn">Sign me up!</Button>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default Footer