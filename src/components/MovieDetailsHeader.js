import React, { useContext } from "react";
import Styled from "styled-components";
import { MovieContext } from "../context/MovieDetailsContext";
import search from "../image/search.svg";

const StyledHeader = Styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
const StyledLogo = Styled.span`
  font-size: 40px;
  color: #f65261; 
`;
const StyledSearch = Styled.img`
  height: 20px;
  transform: rotate(360deg);
  cursor: pointer;
`;


const MovieDetailsHeader = () => {
  const [details, setDetails] = useContext(MovieContext);

  const handleSearchClick = (e) => {
    e.preventDefault();
    setDetails(false);
  };
  return (
    <>
      <StyledHeader>
        <StyledLogo>NetFlixroulette</StyledLogo>
        <StyledSearch src={search} alt="search" onClick={handleSearchClick} />
      </StyledHeader>
    </>
  );
};
export default MovieDetailsHeader;
