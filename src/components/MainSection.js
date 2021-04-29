import React, { useContext} from "react";
import Styled from "styled-components";
import MainSectionHeader from "./MainSectionHeader";
import MainSectionResult from "./MainSectionResult";
import ErrorBoundary from "./ErrorBoundary";
import {InfoContext} from'../context/MovieInfoContext';
// import WithLoading from "./WithLoading";

//const ListWithLoading = WithLoading(MainSectionResult)
const StyledFilterResult = Styled.h2`
color: #fff;
margin: 20px 0;
font-size: 20px;
`;
const StyledFilterItems = Styled.div`
display: flex;
flex-wrap: wrap;
`;
const StyledBody = Styled.div`
background-color: #232323;
padding: 20px 50px;
`;

const MainSection = () => {
  const [movies] = useContext(InfoContext);
  return (
    <>
      <StyledBody>
        <MainSectionHeader />
        <ErrorBoundary>
          <StyledFilterResult>39 movies found</StyledFilterResult>
          <StyledFilterItems>
            {movies.map((movie, key) => (
              <MainSectionResult
                title={movie.title}
                genre={movie.genre}
                year={movie.year}
                src={movie.src}
                key={key}
                id={movie.id}
              />
            ))}
          </StyledFilterItems>
        </ErrorBoundary>
      </StyledBody>
    </>
  );
};

export default MainSection;
