import React from "react";
import Styled from "styled-components";
import propTypes from "prop-types";

const StyledFilterItem = Styled.div`
margin: 50px 50px 0 0;
width: calc(100% / 3 - 35px);
&:nth-child(3n){
    margin: 50px 0 0;
}
`;
const StyledFilmImage = Styled.img`
width: 100%;
height: 650px;
object-fit:cover;
`;
const StyledFilmInfo = Styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
color: #fff;
margin: 20px 0 0;
`;
const StyledFilmName = Styled.h3`
font-size: 24px;
margin: 0 0 15px;
`;
const StyledGenre = Styled.h4`
font-size: 20px;
margin: 0 0 15px;
`;
const StyledYear = Styled.span`
font-size: 16px;
border: 1px solid #fff;
border-radius: 5px;
padding: 5px 10px;
`;
const MainSectionResult = (props) => {
  return (
    <>
      <StyledFilterItem>
        <StyledFilmImage src={props.src} alt={props.title}/>
        <StyledFilmInfo>
          <div>
            <StyledFilmName>{props.title}</StyledFilmName>
            <StyledGenre>{props.genre}</StyledGenre>
          </div>
          <StyledYear>{props.year}</StyledYear>
        </StyledFilmInfo>
      </StyledFilterItem>
    </>
  );
};

MainSectionResult.propTypes = {
    title: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
}

export default MainSectionResult;
