import React from "react";
import Styled from "styled-components";

const StyledHeader = Styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 50px;
`;
const StyledLogo = Styled.span`
  font-size: 40px;
  color: #f65261; 
`;
const StyledButton = Styled.button`
  background: #424242;
  border-radius: 5px;
  color: #f65261; 
  border: none;
  padding: 10px;
  font-size: 24px;
  &:before {
    content: '+';
    display: inline-block;
    margin: 0 10px 0 0 ;
  }
`;
const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledLogo>NetFlixroulette</StyledLogo>
        <StyledButton>ADD MOVIE</StyledButton>
      </StyledHeader>
    </>
  );
};
export default Header;
