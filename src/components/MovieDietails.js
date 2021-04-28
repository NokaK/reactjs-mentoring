import React from "react";
import Styled from "styled-components";
import MovieDetailsHeader from "./MovieDetailsHeader";
import MovieDetailsBlock from "./MovieDetailsBlock";
import bg from "../image/background.jpg";

const StyledBackground = Styled.div`
  position: relative;
  height: 70vh;
`;
const StyledImage = Styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const StyledOpacityBlock = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  padding: 0 50px;
`;

const MovieDietails = () => {
  return (
    <StyledBackground>
      <StyledImage src={bg} alt="background" />
      <StyledOpacityBlock>
        <MovieDetailsHeader />
        <MovieDetailsBlock/>
      </StyledOpacityBlock>
    </StyledBackground>
  );
};
export default MovieDietails;
