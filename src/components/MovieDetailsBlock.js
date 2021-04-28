import React, { useContext } from "react";
import Styled from "styled-components";
import { InfoContext } from "../context/MovieInfoContext";
import bg from "../image/background.jpg";
const StyledBlock = Styled.div`
display: flex;
align-items: center;
`
const StyledImage = Styled.img`
height: 300px;
`
const StyledInfoWrapper = Styled.div`
color: #fff;
margin: 0 0 0 80px;
max-width: 600px;
`
const StyledTitleBlock = Styled.div`
display: flex;
align-items: center;
margin: 0 0 30px;
font-size: 30px; 
`
const StyledTitle = Styled.h1`
margin: 0 20px 0 0 ;
`
const StyledRating = Styled.div`
display: flex;
align-items: center;
justify-content: center;
color: green;
border: 1px solid #fff;
height: 80px;
width: 80px;
border-radius: 50%;
`
const StyledDate = Styled.div`
color: #f65261;
font-size: 26px;
width: 200px;
display: flex;
justify-content: space-between;
`
const MovieDetailsBlock = () => {
  const [movies, setMovies] = useContext(InfoContext);

  return (
    <>
      <StyledBlock>
        <StyledImage src={bg}/>
        <StyledInfoWrapper>
          <StyledTitleBlock>
            <StyledTitle>title</StyledTitle>
            <StyledRating>4.3</StyledRating>
          </StyledTitleBlock>
          <h5> bla bla</h5>
          <StyledDate>
            <span>1994</span>
            <span>154min</span>
          </StyledDate>
          <p>
            Pulp Fiction is a 1994 American neo-noir black comedy crime film
            written and directed by Quentin Tarantino, who conceived it with
            Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce
            Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several
            stories of criminal Los Angeles. The title refers to the pulp
            magazines and hardboiled crime novels popular during the mid-20th
            century, known for their graphic violence and punchy dialogue.
          </p>
        </StyledInfoWrapper>
      </StyledBlock>
    </>
  );
};
export default MovieDetailsBlock;
