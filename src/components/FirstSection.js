import React, { useState } from "react";
import FirstSectionSearch from "./FirstSectionSearch";
import Styled from "styled-components";
import bg from "../image/background.jpg";

import GlobalPopUp from "./GlobalPopUp";

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
  cursor: pointer;
  &:before {
    content: '+';
    display: inline-block;
    margin: 0 10px 0 0 ;
  }
`;
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
`;


const FirstSection = () => {
  const [moveModal, setMoveModal] = useState(false);

  const handleOpenPopup = (e) => {
    e.preventDefault();
    setMoveModal(true);
  };
  const handleClosePopup = () => {
    setMoveModal(false);
  };

  return (
    <>
      <StyledBackground>
        <StyledImage src={bg} alt="background" />
        <StyledOpacityBlock>
          <StyledHeader>
            <StyledLogo>NetFlixroulette</StyledLogo>
            <StyledButton onClick={handleOpenPopup}>ADD MOVIE</StyledButton>
          </StyledHeader>
          {moveModal ? (
            <GlobalPopUp moveModal={moveModal} handleClosePopup={handleClosePopup} />
          ) : null}
          <FirstSectionSearch />
        </StyledOpacityBlock>
      </StyledBackground>
    </>
  );
};
export default FirstSection;
