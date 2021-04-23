import React from "react";
import Styled from "styled-components";

const StyledTitle = Styled.h1`
  color: #fff;
  font-size: 40px;
  margin: 50px 0 20px 70px;
`;
const StyledInputWrapper = Styled.div`
 margin: 0 70px;
 display: flex;
`;
const StyledInput = Styled.input`
 width: calc(100% - 200px);
 margin: 0 15px 0 0;
 background: #232323;
 border: none;
 border-radius: 5px;
 color: #fff;
 font-size: 20px;
 padding: 15px;
`;
const StyledInputButton = Styled.button`
width: 200px;
color: #fff;
font-size: 24px;
padding: 15px 0 ;
background-color: #f65261; 
border: none;
border-radius: 5px;
`;
const FirstSectionSearch = () => {
  return (
    <>
      <StyledTitle>FIND YOUR MOVIE</StyledTitle>
      <StyledInputWrapper>
        <StyledInput placeholder="What do you want to watch?" />
        <StyledInputButton>SEARCH</StyledInputButton>
      </StyledInputWrapper>
    </>
  );
};
export default FirstSectionSearch;
