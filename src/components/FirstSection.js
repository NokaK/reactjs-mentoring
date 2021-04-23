import React from "react";
import FirstSectionSearch from "./FirstSectionSearch";
import Styled from "styled-components";
import bg from "../image/background.jpg";
import MoviePopUp from "./MoviePopUp";

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

const StyledPopup = Styled.div`
 position: fixed;
 height: 100%;
 width: 100%;
 top: 0;
 left: 0;
 background-color: rgba(0,0,0,0.7);
 display: flex;
 justify-content: center;
 align-items: center;
 z-index: 10;
 padding:15px 0 0;
`;
const StyledPopupContent = Styled.div`
color: #fff;
background-color: #232323;
max-width: 500px;
width: 100%;
padding: 15px 30px;
border-radius: 6px;
position: relative;

`;
const StyledCloseButton = Styled.button`
position:absolute;
right: 20px;
top: 20px;
background:none;
border: none;
cursor: pointer;
&:after{
  content: 'X';
  dispplay:block;
  color: #fff;
  font-size: 35px;
}
`;

class FirstSection extends React.Component {
  state = {
    popUp: false,
  };
  handleOpenPopup = (e) => {
    e.preventDefault();
    this.setState({ popUp: true });
  };
  handleClosePopup = (e) => {
    e.preventDefault();
    this.setState({ popUp: false });
  };
  render() {
    return (
      <>
        <StyledBackground>
          <StyledImage src={bg} alt="background" />
          <StyledOpacityBlock>
            <StyledHeader>
              <StyledLogo>NetFlixroulette</StyledLogo>
              <StyledButton onClick={this.handleOpenPopup}>
                ADD MOVIE
              </StyledButton>
            </StyledHeader>
            {this.state.popUp ? (
              <>
                <StyledPopup>
                  <StyledPopupContent>
                   <MoviePopUp/>
                    <StyledCloseButton onClick={this.handleClosePopup} />
                  </StyledPopupContent>
                </StyledPopup>
              </>
            ) : null}
            <FirstSectionSearch />
          </StyledOpacityBlock>
        </StyledBackground>
      </>
    );
  }
}
export default FirstSection;
