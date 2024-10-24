// import React from 'react';
import './Footer.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>Made By Karan Oza ♡</p>
          <div className="footer-social-icons">
           <a href="https://www.facebook.com/karan.oza.3705"> <img src={assets.facebook_icon} alt="Facebook" /></a>
           <a href="https://x.com/oza_karan67740"> <img src={assets.twitter_icon} alt="Twitter" /></a>
            <a href="https://www.linkedin.com/in/karan-oza-tech/"><img src={assets.linkedin_icon} alt="LinkedIn" /></a>
          </div>
        </div>
        
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            {/* Use Link for routing to different pages */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
           
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
          <li>Email: <a href="mailto:ozakaran1@gmail.com">ozakaran1@gmail.com</a></li>
          <li>Phone: <a href="tel:+8104295527">+8104295527</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Tomato.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
