
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section stay-connected">
          <h4>Stay Connected</h4>
          <p>Stay up to date on our latest news and products. Enter your email to subscribe.</p>
          <form className="email-subscribe">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#twitter"><i className="fab fa-twitter"></i></a>
            <a href="#instagram"><i className="fab fa-instagram"></i></a>
            <a href="#youtube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Sections</h4>
          <ul>
            <li onClick={() => handleNavigation('/men')}>Men</li>
            <li onClick={() => handleNavigation('/women')}>Women</li>
            <li onClick={() => handleNavigation('/kids')}>Kids</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About Nike</h4>
          <ul>
            <li onClick={() => handleNavigation('/about')}>About Nike</li>
            <li onClick={() => handleNavigation('/news')}>News</li>
          
          </ul>
        </div>
        <div className="footer-bottom">
          <hr/>
          <p>&copy; 2024 Nike, Inc. All Rights Reserved.Terms and Conditions  Privacy</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
