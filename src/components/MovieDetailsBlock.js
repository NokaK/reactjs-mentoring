import React, { useContext } from "react";
import Styled from "styled-components";
import {useSelector } from "react-redux";
import { ChosenMovieContext } from "../context/MovieIdContext";

const StyledBlock = Styled.div`
display: flex;
align-items: center;
`;
const StyledImage = Styled.img`
height: 300px;
`;
const StyledInfoWrapper = Styled.div`
color: #fff;
margin: 0 0 0 80px;
max-width: 700px;
`;
const StyledTitleBlock = Styled.div`
display: flex;
align-items: center;
margin: 0;
font-size: 28px; 
`;
const StyledTitle = Styled.h1`
margin: 0 20px 0 0 ;
`;
const StyledRating = Styled.div`
display: flex;
align-items: center;
justify-content: center;
color: green;
border: 1px solid #fff;
height: 80px;
width: 80px;
border-radius: 50%;
`;
const StyledDate = Styled.div`
color: #f65261;
font-size: 26px;
width: 200px;
display: flex;
justify-content: space-between;
`;
const MovieDetailsBlock = () => {
  const state = useSelector((state) => state);
  const [choosenMovie] = useContext(ChosenMovieContext);

  return (
    <>
      {state.items.map((item, key) =>
        item.id === choosenMovie ? (
          <StyledBlock key={item.id}>
            <StyledImage src={item.poster_path} alt={item.title} />
            <StyledInfoWrapper>
              <StyledTitleBlock>
                <StyledTitle>{item.title}</StyledTitle>
                <StyledRating>{item.vote_average}</StyledRating>
              </StyledTitleBlock>
              <h5>{item.genre}</h5>
              <StyledDate>
                <span>{item.release_date}</span>
                <span>{item.runtime}</span>
              </StyledDate>
              <p>{item.overview}</p>
            </StyledInfoWrapper>
          </StyledBlock>
        ) : null
      )}
    </>
  );
};
export default MovieDetailsBlock;
