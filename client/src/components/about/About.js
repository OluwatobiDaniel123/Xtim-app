import React from "react";
import "./About.css";
import img1 from "../../assets/images/icon-online.svg";
import img3 from "../../assets/images/icon-onboarding.svg";
import img2 from "../../assets/images/icon-budgeting.svg";
import img4 from "../../assets/images/icon-api.svg";

const About = () => {
  return (
    <section className="about-content">
      <div className="about-text">
        <h1>Why Choose Easybank?</h1>
        <p>
          We leverage Open Banking to turn your account into your financial hub
          <p>Control your financial like never before.</p>
        </p>
      </div>

      <div className="about-list">
        <ul>
          <li className="card">
            <img src={img1} />
            <p className="text-bold">Online Banking</p>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances whenever you are in the world.{" "}
            </p>
          </li>
          <li className="card">
            <img src={img2} />
            <p className="text-bold">Simple Budgeting</p>
            <p>
              See exactly where your money goes each month.Receive notifications
              when you're close to hitting your limits.
            </p>
          </li>
          <li className="card">
            <img src={img3} />
            <p className="text-bold">Fast Onboarding </p>
            <p>
              We don't do branches Open your account in minutes online and start
              taking control of your finances right away so as receiving
              notifications.
            </p>
          </li>
          <li className="card">
            <img src={img4} />
            <p className="text-bold">Open API</p>
            <p>
              Manage your Savings,Investment,Pension, and much more from one
              account.Tracking your money has never been easier.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
