import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import close from "../../assets/images/icon-close.svg";
import nav from "../../assets/images/icon-hamburger.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(location.pathname);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <div className="gap">
      <div className="header-box">
        <Link to="/">
          <img src={logo} alt="Company Logo" />
        </Link>

        <ul className="header-ul">
          <li className={activeNav === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={activeNav === "/artists" ? "active" : ""}>
            <Link to="/artists">Artists</Link>
          </li>
          <li className={activeNav === "/music" ? "active" : ""}>
            <Link to="/music">Music</Link>
          </li>
          <li className={activeNav === "/events" ? "active" : ""}>
            <Link to="/events">Events</Link>
          </li>
          <li className={activeNav === "/store" ? "active" : ""}>
            <Link to="/store">Store</Link>
          </li>{" "}
          <li className={activeNav === "/contact" ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="header-button">
          <Link to="/register">
            <button>Request Invite</button>
          </Link>
        </div>
      </div>

      <div className="navbar">
        <Link to="/">
          <img onClick={closeNav} src={logo} alt="Company Logo" />
        </Link>
        <div className="nav-close">
          {showNav ? (
            <img src={close} onClick={toggleNav} alt="img" />
          ) : (
            <img src={nav} onClick={toggleNav} alt="img" />
          )}
        </div>
      </div>

      {showNav && (
        <ul className="navbar-ul">
          <li onClick={closeNav} className={activeNav === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={closeNav}
            className={activeNav === "/artists" ? "active" : ""}
          >
            <Link to="/artists">Artists</Link>
          </li>
          <li
            onClick={closeNav}
            className={activeNav === "/music" ? "active" : ""}
          >
            <Link to="/music">Music</Link>
          </li>
          <li
            onClick={closeNav}
            className={activeNav === "/events" ? "active" : ""}
          >
            <Link to="/events">Events</Link>
          </li>
          <li
            onClick={closeNav}
            className={activeNav === "/store" ? "active" : ""}
          >
            <Link to="/store">Store</Link>
          </li>{" "}
          <li
            onClick={closeNav}
            className={activeNav === "/contact" ? "active" : ""}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
