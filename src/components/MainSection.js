import React, { useContext, useEffect } from "react";
import Styled from "styled-components";
import MainSectionHeader from "./MainSectionHeader";
import MainSectionResult from "./MainSectionResult";
import ErrorBoundary from "./ErrorBoundary";
import { InfoContext } from "../context/MovieInfoContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./Action";
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

const MainSection = () => {
  // const [movies] = useContext(InfoContext);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  return (
    <>
      <StyledBody>
        <MainSectionHeader />
        <ErrorBoundary>
          <StyledFilterResult>39 movies found</StyledFilterResult>
          <StyledFilterItems>
            {state.items.map((item, index) => (
              <MainSectionResult item={item} key={index} />
            ))}
          </StyledFilterItems>
        </ErrorBoundary>
      </StyledBody>
    </>
  );
};

export default MainSection;
