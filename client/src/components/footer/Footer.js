import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-box">
      <div className="social-box">
        <div className="footer-logo">
          <img className="social-image" src={logo} alt="footer-logo" />
        </div>
        <ul>
          <li>
            <img src={facebook} alt="img" />
          </li>{" "}
          <li>
            <img src={youtube} alt="img" />
          </li>{" "}
          <li>
            <img src={twitter} alt="img" />
          </li>{" "}
          <li>
            <img src={pinterest} alt="img" />
          </li>{" "}
          <li>
            <img src={instagram} alt="img" />
          </li>{" "}
        </ul>
      </div>

      <div className="links-box">
        <div className="link">
          <ul>
            <Link to="/about">
              <li>About Us</li>
            </Link>

            <Link to="/contact">
              <li>Contact</li>
            </Link>

            <Link to="/blog">
              <li>Blog</li>
            </Link>
          </ul>
        </div>

        <div className="link">
          <ul>
            <Link to="/career">
              <li>Careers</li>
            </Link>

            <Link to="/support">
              <li>Support</li>
            </Link>

            <Link to="/policy">
              <li>Privacy Policy</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="other-box">
        <div className="header-button">
          <Link to="/register">
            <button>Request Invite</button>
          </Link>
        </div>

        <p> &copy; Easybank. All Rights Reserved </p>
      </div>
    </section>
  );
};

export default Footer;
