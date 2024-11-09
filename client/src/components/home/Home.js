import React from "react";
import About from "../articles/About";
import Cards from "../articles/Cards";
import Banner from "../articles/Banner";
import Contact from "../articles/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Cards />
      <Contact />
    </div>
  );
};

export default Home;
