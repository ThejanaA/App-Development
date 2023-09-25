import React from "react";
import './Footer.css';
import { Link as ScrollLink } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from "react-router-dom";

export default function Footer() {

  const nav=useNavigate();
  const NavAbout=()=>
  {
    nav("/aboutus")
  }
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <h4 className="footer-heading">Legal</h4>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="/terms" className="footer-link">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a onClick={NavAbout} className="footer-link">
                About us
              </a>
            </li>
            
            <li className="footer-list-item">
              <a href="/FAQ" className="footer-link">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Connect with Us</h4>
          <ul className="social-icons">
            <li className="social-icons-item">
              <a href="https://www.facebook.com/SpamShiled12/" className="social-icon-link facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="social-icons-item">
              <a href="https://www.instagram.com/_spamshield4789_/" className="social-icon-link instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="social-icons-item">
              <a href="https://twitter.com/home" className="social-icon-link twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="social-icons-item">
              <a href="https://github.com/" className="social-icon-link github">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">© 2023 All Rights Reserved</p>
    </footer>
  );
        <ScrollLink
          to="about-us"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="footer-link"
        >
          About Us
        </ScrollLink>
  

  }


