import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    const goToHome = () => {
        window.location.href = "/"; // Redirects to home page
    };

    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="FreshBite Logo" />
                    <h2 className="text-lg font-bold">FreshBite HQ</h2>
                    <p className="mt-2">1234 Tasty Avenue</p>
                    <p>Flavor Town, FT 56789</p>
                    <p>United States.</p>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/zomato" target="_blank" rel="noopener noreferrer">
                            <img src={assets.facebook_icon} alt="Facebook" />
                        </a>
                        <a href="https://twitter.com/zomato" target="_blank" rel="noopener noreferrer">
                            <img src={assets.twitter_icon} alt="Twitter" />
                        </a>
                        <a href="https://www.linkedin.com/company/zomato" target="_blank" rel="noopener noreferrer">
                            <img src={assets.linkedin_icon} alt="LinkedIn" />
                        </a>
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2> 
                    <ul>
                        <li onClick={goToHome} style={{ cursor: "pointer" }}>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>
                            <a 
                                href="/FreshBite_Privacy_Policy_Corrected.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                    <li>📞 <a href="tel:+918917009466" className="phone-link">+91-8917009466</a></li>
                        <li>📧 <a href="mailto:kushwahaansh007@gmail.com" className="email-link">kushwahaansh007@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2025 © FreshBites.com - All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
