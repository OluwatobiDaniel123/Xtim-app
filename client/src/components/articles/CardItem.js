import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardsLink = styled(Link)`
  display: flex;
  flex-flow: column;
  width: 350px;
  box-shadow: 0.5px 1px 0.5px 2px #4caf50;
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`;

const CardsItemPicWrap = styled.figure`
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;

  &::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc(100% - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
    box-sizing: border-box;
  }
`;

const CardsItemImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;

const CardsItemInfo = styled.div`
  padding: 12px 13px 3px;
  background: #201f1f;
`;

const CardsItemText = styled.h5`
  color: white;
  font-size: 18px;
  background: linear-gradient(0deg, #4caf50, #ffdb58, #a3c651);
  -webkit-background-clip: text;
  color: transparent;
  &:hover {
    color: #4caf50;
  }
`;

const CardsItemParagraph = styled.p`
  background: linear-gradient(90deg, #4caf50, #ffdb58, #a3c651);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 15px;
  padding: 10px 0;
  font-weight: 300;
`;

function CardItem(props) {
  return (
    <CardsLink to={props.path}>
      <CardsItemPicWrap data-category={props.label}>
        <CardsItemImg src={props.src} alt="Travel image" />
      </CardsItemPicWrap>
      <CardsItemInfo>
        <CardsItemText>{props.text}</CardsItemText>
        <CardsItemParagraph>{props.paragraph}</CardsItemParagraph>
      </CardsItemInfo>
    </CardsLink>
  );
}

export default CardItem;
