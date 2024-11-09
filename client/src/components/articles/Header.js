// import React, { useEffect, useState } from "react";
// import logo from "../../assets/images/logo.png";
// import close from "../../assets/images/icon-close.svg";
// import nav from "../../assets/images/icon-hamburger.svg";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import styled from "styled-components";

// const Header = () => {
//   const location = useLocation();
//   const [activeNav, setActiveNav] = useState(location.pathname);
//   const [showNav, setShowNav] = useState(false);

//   useEffect(() => {
//     setActiveNav(location.pathname);
//   }, [location]);

//   const toggleNav = () => {
//     setShowNav(!showNav);
//   };

//   const closeNav = () => {
//     setShowNav(false);
//   };

//   const Div = styled.div`
//     background-color: #201f1f;
//     box-shadow: 0 px 5px darkblue;
//     position: sticky;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 1000;
//   `;

//   const Box = styled.div`
//     max-width: 1200px;
//     margin: 0 auto;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     // padding: 0 20px;
//   `;

//   const Image = styled.img`
//     height: 90px;
//     width: 150px;
//   `;

//   const ImgDiv = styled.div`
//     display: flex;
//   `;

//   const HeaderUl = styled.ul`
//     display: flex;
//     list-style: none;
//     padding: 0;
//     margin: 0;
//     align-items: center;
//     justify-content: space-around;
//     padding: 10px 0;
//   `;

//   const NavItem = styled.li`
//     font-size: 18px;
//     position: relative;
//     margin: 0 15px;

//     a {
//       text-decoration: none;
//       color: ${(props) =>
//         props.isActive ? "#1e90ff" : "#333"}; /* Active link color */
//       font-weight: ${(props) => (props.isActive ? "700" : "500")};
//       padding: 5px 10px;
//       position: relative;
//       display: inline-block;
//       transition: color 0.3s ease, transform 0.3s ease;

//       &:hover {
//         color: #1e90ff; /* Hover color */
//         background-color: rgba(
//           30,
//           844,
//           255,
//           0.1
//         ); /* Light blue hover background */
//         border-radius: 5px;
//         transform: translateY(-3px); /* Subtle lift on hover */
//       }

//       /* Animated underline effect for active link */
//       &::after {
//         content: "";
//         position: absolute;
//         left: 0;
//         bottom: -3px;
//         width: ${(props) => (props.isActive ? "100%" : "0")};
//         height: 3px;
//         background-color: #1e90ff;
//         transition: width 0.3s ease;
//       }
//     }
//   `;

//   return (
//     <Div>
//       <Box>
//         <Link to="/">
//           <ImgDiv>
//             <Image src={logo} alt="Company Logo" />
//           </ImgDiv>
//         </Link>

//         <HeaderUl>
//           <NavItem isActive={activeNav === "/"}>
//             <Link to="/">Home</Link>
//           </NavItem>
//           <NavItem isActive={activeNav === "/"}>
//             <Link to="/artists">Artists</Link>
//           </NavItem>
//           <NavItem isActive={activeNav === "/"}>
//             <Link to="/music">Music</Link>
//           </NavItem>
//           <NavItem isActive={activeNav === "/"}>
//             <Link to="/events">Events</Link>
//           </NavItem>
//           <NavItem isActive={activeNav === "/"}>
//             <Link to="/contact">Contact</Link>
//           </NavItem>
//         </HeaderUl>
//       </Box>

//       {/* <div className="navbar">
//         <Link to="/">
//           <img onClick={closeNav} src={logo} alt="Company Logo" />
//         </Link>
//         <div className="nav-close">
//           {showNav ? (
//             <img src={close} onClick={toggleNav} alt="img" />
//           ) : (
//             <img src={nav} onClick={toggleNav} alt="img" />
//           )}
//         </div>
//       </div> */}

//       {showNav && (
//         <ul className="navbar-ul">
//           <li onClick={closeNav} className={activeNav === "/" ? "active" : ""}>
//             <Link to="/">Home</Link>
//           </li>
//           <li
//             onClick={closeNav}
//             className={activeNav === "/artists" ? "active" : ""}
//           >
//             <Link to="/artists">Artists</Link>
//           </li>
//           <li
//             onClick={closeNav}
//             className={activeNav === "/music" ? "active" : ""}
//           >
//             <Link to="/music">Music</Link>
//           </li>
//           <li
//             onClick={closeNav}
//             className={activeNav === "/events" ? "active" : ""}
//           >
//             <Link to="/events">Events</Link>
//           </li>
//           <li
//             onClick={closeNav}
//             className={activeNav === "/store" ? "active" : ""}
//           >
//             <Link to="/store">Store</Link>
//           </li>{" "}
//           <li
//             onClick={closeNav}
//             className={activeNav === "/contact" ? "active" : ""}
//           >
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       )}
//     </Div>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import closeIcon from "../../assets/images/icon-close.svg";
import navIcon from "../../assets/images/icon-hamburger.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #201f1f;
  box-shadow: 0 1px 5px darkblue;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Box = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  height: 90px;
  width: 150px;
`;

const HeaderUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 25px;
  margin: 0;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; /* Hide the default header menu on mobile */
  }
`;

const NavItem = styled.li`
  font-size: 18px;

  a {
      text-decoration: none;
      color: ${(props) => (props.isActive ? "#4caf50" : "#92781a")}; 
      font-weight: ${(props) => (props.isActive ? "800" : "600")};
      padding: 5px 10px;
      position: relative;
      display: inline-block;
      transition: color 0.3s ease, transform 0.3s ease;
      &:hover {
        color: #4caf50; 
        background-color: rgba(
          30,
          844,
          255,
          0.1
        ); 
        border-radius: 5px;
        transform: translateY(-3px); 
      }
`;

const NavIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-left: auto;

  @media (min-width: 769px) {
    display: none; /* Only show the nav icon on mobile */
  }
`;

const SideNav = styled.div`
  position: fixed;
  top: 0;
  left: ${({ show }) => (show ? "0" : "-100%")};
  width: 250px;
  height: 100vh;
  background-color: #201f1f;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  transition: left 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 999;

  @media (min-width: 769px) {
    display: none; /* Hide the side nav on larger screens */
  }
`;

const CloseIcon = styled.img`
  width: 20px;
  height: 20px;
  align-self: flex-end;
  cursor: pointer;
`;

const SideNavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid #444;
  transition: color 0.3s;

  &:hover {
    color: #1e90ff;
  }
`;

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

  return (
    <HeaderContainer>
      <Box>
        <Link to="/">
          <LogoImage src={logo} alt="Company Logo" />
        </Link>

        {/* Desktop Nav */}
        <HeaderUl>
          <NavItem isActive={activeNav === "/"}>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem isActive={activeNav === "/artists"}>
            <Link to="/artists">Artists</Link>
          </NavItem>
          <NavItem isActive={activeNav === "/music"}>
            <Link to="/music">Music</Link>
          </NavItem>
          <NavItem isActive={activeNav === "/events"}>
            <Link to="/events">Events</Link>
          </NavItem>
          <NavItem isActive={activeNav === "/contact"}>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </HeaderUl>

        {/* Mobile Nav Icon */}
        <NavIcon src={showNav ? closeIcon : navIcon} onClick={toggleNav} />
      </Box>

      {/* Side Nav for Mobile */}
      <SideNav show={showNav}>
        <CloseIcon src={closeIcon} onClick={toggleNav} />
        <SideNavItem to="/" onClick={() => setShowNav(false)}>
          Home
        </SideNavItem>
        <SideNavItem to="/artists" onClick={() => setShowNav(false)}>
          Artists
        </SideNavItem>
        <SideNavItem to="/music" onClick={() => setShowNav(false)}>
          Music
        </SideNavItem>
        <SideNavItem to="/events" onClick={() => setShowNav(false)}>
          Events
        </SideNavItem>
        <SideNavItem to="/contact" onClick={() => setShowNav(false)}>
          Contact
        </SideNavItem>
      </SideNav>
    </HeaderContainer>
  );
};

export default Header;
