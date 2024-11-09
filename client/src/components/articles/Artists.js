import React from "react";
import styled from "styled-components";

const Artists = () => {
  const Box = styled.div`
    background: #201f1f;
    height: 100vh;
  `;
  const H1 = styled.h1`
    padding: 10px 0 0;
    font-size: 30px;
    background: linear-gradient(0deg, #4a00e0, #ee0979, #4a00e0);
    -webkit-background-clip: text;
    color: transparent;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  `;
  return (
    <Box>
      <H1>Name and age of the Artists</H1>
    </Box>
  );
};

export default Artists;
