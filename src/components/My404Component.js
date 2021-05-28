import React from "react";
import Styled from "styled-components";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import image404 from "../image/404.PNG";
const StyledWrapper = Styled.div`
background-color: #232323;
height: calc(100vh - 94px);
padding: 20px 0 0;
`;
const StyledContent = Styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100%;
`;
const StyledLogo = Styled.span`
font-size: 30px;
color: #f65261;
margin: 0 0 0 20px;
`;
const StyledImg = Styled.img`
margin: 20px 0;
height: 200px;
`;
const StyledTitle = Styled.h1`
color: #fff;
font-size: 40px;
margin: 0 ;
`

const My404Component = () => {
  return (
    <>
      <StyledWrapper>
        <StyledLogo>NetFlixroulette</StyledLogo>
        <StyledContent>
          <StyledTitle>PAGE NOT FOUND</StyledTitle>
          <StyledImg src={image404} alt="404" />
          <Link className="link" to="/">GO BACK TO HOME</Link>
        </StyledContent>
      </StyledWrapper>
      <Footer />
    </>
  );
};

export default My404Component;
