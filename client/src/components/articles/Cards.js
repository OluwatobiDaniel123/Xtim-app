import React from "react";
import CardItem from "./CardItem";
// import "./Cards.css";
import img1 from "../../assets/images/image-currency.jpg";
import img3 from "../../assets/images/image-restaurant.jpg";
import img2 from "../../assets/images/image-plane.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img5 from "../../assets/images/img-2.jpg";
import slide10 from "../../assets/slide10.png";

import styled from "styled-components";

function Cards() {
  const Cards = styled.div`
    padding: 3rem 0;
    background-image: url(${slide10});
    background-size: cover; 
    background-position: center;
\
  `;
  const H1 = styled.h1`
    text-align: center;
    background: linear-gradient(90deg, #c15607, #ee0979, #4a00e0);
    -webkit-background-clip: text;
    color: transparent;
  `;
  const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
  `;
  const Container2 = styled.div`
    position: relative;
    margin: 50px 0 45px;
  `;
  const Ul = styled.ul`
    margin-bottom: 24px;
    display: flex;
    gap: 20px;
  `;
  return (
    <Cards>
      <H1>Our Artists</H1>
      <Container>
        <Container2>
          <Ul>
            <CardItem
              src={img1}
              text="Receive money in any currency with no fees"
              paragraph="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single currency, why not try easybank today and enjoy spending in all..."
              label="By Claire Robinson"
              path="/services"
            />
            <CardItem
              src={img2}
              text="Take your Easybank card whenever you go"
              paragraph="We want you to enjoy your travels. This is why we don't charge any fees on purchasing while you're abroad. We'll even show give you discount on any purchase you make like..."
              label="By Wilson Hutton"
              path="/services"
            />
          </Ul>
        </Container2>
      </Container>
    </Cards>
  );
}

export default Cards;
