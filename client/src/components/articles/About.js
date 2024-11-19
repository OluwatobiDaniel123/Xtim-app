import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import slide1 from "../../../src/assets/slide8.jpg";
import slide2 from "../../../src/assets/slide2.jpg";
import slide16 from "../../../src/assets/slide16.png";
import slide15 from "../../../src/assets/slide15.png";
import slide14 from "../../../src/assets/slide14.png";
import slide13 from "../../../src/assets/slide13.png";

import { Link } from "react-router-dom";

const About = () => {
  const Div = styled.div`
    background: #201f1f;
  `;

  const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3px;
    margin: 0 0 12px;
  `;

  const H1 = styled.h1`
    padding: 30px 0 0;
    font-size: 50px;
    background: linear-gradient(0deg, #4caf50, #ffdb58, #a3c651);
    -webkit-background-clip: text;
    color: transparent;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  `;
  const P = styled.p`
    font-size: 18px;
    padding: 2px;
    text-align: center;
    background: linear-gradient(90deg, #4caf50, #ffdb58, #a3c651);
    -webkit-background-clip: text;
    color: transparent;
  `;
  const Div3 = styled.div`
    width: 100%;
  `;
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    speed: 2000,
    className: "center",
    centerMode: true,
    centerPadding: "-27px",
  };
  const Div4 = styled.div`
    padding: 5px;
    width: 50px;
    height: 500px;
    border-radius: 10px;
    @media (max-width: 769px) {
      height: 350px;
      padding: 1px;
    }
  `;
  const Img = styled.img`
    width: 90%;
    height: 90%;
    border-radius: 10px;
    border: 2px solid purple;
    transition: all 0.3s linear;
    &:hover {
      transform: scale(1.05);
    }
  `;

  const Div5 = styled.div``;

  return (
    <Div>
      <Div2>
        <H1>Our Mission</H1>
        <P>
          XTiiM Record Label is a pioneering music label committed to
          discovering, nurturing, and empowering talented artists across diverse
          genres. Our mission is to provide a platform that amplifies unique
          voices and fosters musical innovation, bringing fresh and original
          sounds to audiences worldwide. At XTiiM, we believe in the power of
          music to inspire, connect, and transform. Our team works closely with
          each artist to develop their full potential, from recording and
          production to marketing and live performances. Join us as we redefine
          the future of music
        </P>
        <H1>Our Vision</H1>
        <P>Changing The Atmosphere One Song At A Time</P>
      </Div2>
      <Div3 className="slider-container">
        <Slider {...settings}>
          <Div4>
            <Link to="/artists">
              <Img src={slide1} alt="img" />
            </Link>
          </Div4>
          <Div4>
            <Link to="/artists">
              <Img src={slide2} alt="img" />
            </Link>
          </Div4>
          <Div4>
            <Link to="/artists">
              <Img src={slide16} alt="img" />
            </Link>
          </Div4>
          <Div4>
            <Link to="/artists">
              <Img src={slide15} alt="img" />
            </Link>
          </Div4>{" "}
          <Div4>
            <Link to="/artists">
              <Img src={slide14} alt="img" />
            </Link>
          </Div4>{" "}
          <Div4>
            <Link to="/artists">
              <Img src={slide13} alt="img" />
            </Link>
          </Div4>
        </Slider>
      </Div3>
    </Div>
  );
};

export default About;
