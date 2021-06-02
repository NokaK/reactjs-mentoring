import React, { useEffect } from "react";
import Styled from "styled-components";
import MainSectionHeader from "./MainSectionHeader";
import MainSectionResult from "./MainSectionResult";
import ErrorBoundary from "./ErrorBoundary";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./Action";
import MovieNotFound from "./MovieNotFound";
import { withRouter } from "react-router-dom";

// import WithLoading from "./WithLoading";

//const ListWithLoading = WithLoading(MainSectionResult)
const StyledFilterResult = Styled.h2`
color: #fff;
margin: 20px 0;
font-size: 20px;
`;

const StyledBody = Styled.div`
background-color: #232323;
padding: 20px 50px;
`;
const StyledFilterItems = Styled.div`
display: flex;
flex-wrap: wrap;
`;

const MainSection = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <>
      <StyledBody>
        <MainSectionHeader />
        {props.movie ? (
          <ErrorBoundary>
            {" "}
            <StyledFilterResult>
              {state.items.length} movies found
            </StyledFilterResult>
            <StyledFilterItems>
              {state.items &&
                state.items.map((item, index) => (
                  <MainSectionResult item={item} key={index} />
                ))}
            </StyledFilterItems>
          </ErrorBoundary>
        ) : (
          <MovieNotFound />
        )}
      </StyledBody>
    </>
  );
};

export default withRouter(MainSection);
