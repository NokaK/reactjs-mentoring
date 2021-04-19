import React from "react";
import Styled from "styled-components";

const StyledFooter = Styled.footer`
text-align: center;
background-color: #424242;
padding: 20px 0;
`;
const StyledLogo = Styled.span`
  font-size: 40px;
  color: #f65261; 
`;
const Footer = () => {
  return (
    <>
      <StyledFooter>
        <StyledLogo>NetFlixroulette</StyledLogo>
      </StyledFooter>
    </>
  );
};
export default Footer;
