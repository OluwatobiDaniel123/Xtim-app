import React from "react";
import Landing from "../landing/Landing";
import About from "../about/About";
import Cards from "../articles/Cards";

const Home = () => {
  return (
    <div>
      <Landing />
      <About />

      <Cards />
    </div>
  );
};

export default Home;
