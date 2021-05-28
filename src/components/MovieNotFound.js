import React from "react";
import Styled from "styled-components";

const StyledWrapper = Styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #232323;
min-height: 500px;
padding: 20px 0 0;
`;
const StyledTitle = Styled.h1`
color: #fff;
font-size: 40px;
margin: 0 ;
`

const MovieNotFound = () => {
  return (
    <>
      <StyledWrapper>
          <StyledTitle>NO MOVIE FOUND</StyledTitle>
      </StyledWrapper>
    </>
  );
};

export default MovieNotFound;
