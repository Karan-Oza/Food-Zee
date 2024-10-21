// import React from 'react';
import './Footer.css';
import { assets } from '../../assets/frontend_assets/assets';


const Footer = () => {
  
  return (
    <div className='footer'id='footer'>
      <div className="footer-content">
        <div className="div footer-content-left">
          <img src={assets.logo} alt="" />
          <p>© 2019 All rights reserved</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon}alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>

        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+21 87265392</li>
            <li>karanoza2002@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
      copyright 2024 Tomato.com - All Copyright Reserved

      </p>
    </div>
  )
}

export default Footer
