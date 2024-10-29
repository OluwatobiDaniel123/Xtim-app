import React from "react";
import img1 from "../../assets/images/bg-intro-desktop.svg";
import img3 from "../../assets/images/bg-intro-mobile.svg";
import img2 from "../../assets/images/image-mockups.png";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="section">
      {/* <video
        src={video}
        type="video/mp4"
        muted
        autoPlay={"autoplay"}
        preLoad="auto"
        loop
      /> */}
      <div className="home">
        <div className="home-text">
          <h1>Next Generation Digital Banking</h1>

          <p>
            Take your financial life online your Easybank account will be a
            one-stop for spending, saving, budgeting, and much more!
          </p>

          <div className="page-btn">
            <Link to="/register">
              <button>Request Invite</button>
            </Link>
          </div>
        </div>

        <div className="home-img">
          <img className="img1" src={img1} alt="img1" />
          <img className="img3" src={img3} alt="img2" />
          <img className="img2" src={img2} alt="img3" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
