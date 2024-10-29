import "./Dashboard.css";
import Graph from "../user/Graph.js";
import Form from "../user/Form.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import img2 from "../../src/assets/images/icon-hamburger.svg";
import img1 from "../../src/assets/images/icon-close.svg";
import img3 from "../../src/assets/images/logo.svg";

function Dashboard() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };
  return (
    <div className="  text-center bg-slate-200 drop-shadow-lg text-gray-800">
      <div className="flex p-4 bg-slate-900 justify-between">
        <div>
          <img src={img3} alt="logo" />
        </div>
        <div className="nav-close">
          {showNav ? (
            <img src={img1} onClick={toggleNav} alt="img" />
          ) : (
            <img src={img2} onClick={toggleNav} alt="img" />
          )}
        </div>
      </div>

      {showNav && (
        <div>
          <div className="bg-slate-800 w-72 min-h-screen absolute z-10">
            <ul className="flex flex-col text-left ">
              <li onClick={closeNav}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={closeNav}>
                <Link to="/login">login</Link>
              </li>
              <li onClick={closeNav}>
                <Link to="/register">signIn</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {/* grid columns */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Chart */}
        <Graph></Graph>

        {/* Form */}

        <Form></Form>
      </div>
    </div>
  );
}

export default Dashboard;
