import React from 'react';
import './Footer.css'; // Add a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-description">
          <h2>Ponchyk & Co</h2>
            <p>Bringing happiness to your taste buds with every bite. At Ponchyk & Co, we craft the finest donuts with love, perfect for any craving. Fresh, fluffy, and utterly delightful.</p>
        </div>
        <div className="footer-contact">
          <p>123 Zhytomyrska street,</p>
          <p>Kyiv, Ukraine</p>
          <p>03179</p>
          <p><a href="tel:+380441234567">+38 (044) 123-4567</a></p>
          <p><a href="mailto:hello@ponchykco.com">hello@ponchykco.com</a></p>
        </div>
        <div className="footer-links">
          <a href="#facebook">Facebook</a>
          <a href="#instagram">Instagram</a>
          <a href="#tiktok">TikTok</a>
          <a href="#menu">Menu</a>
          <a href="#locations">Locations</a>
          <a href="#privacy">Privacy and Donuts</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
