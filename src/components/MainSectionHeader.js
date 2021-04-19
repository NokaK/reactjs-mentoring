import React from "react";
import Styled from "styled-components";

const StyledResult = Styled.div`
display: flex;
justify-content: space-between;
align-items : center;
border-bottom: 3px groove #424242;
border-radius: 5px;
padding: 0 0 10px; 
`;
const StyledFilter = Styled.ul`
display: flex;
padding : 0
`;
const StyledFilterList = Styled.li`
display: flex;
color: #fff;
font-size: 20px;
margin: 0 15px 0 0;
`;
const StyledSort = Styled.div`
display: flex;
color: #fff;
font-size: 20px;
margin: 0 10px 0 0;
`;
const MainSectionHeader = () => {
  return (
    <>
      <StyledResult>
        <StyledFilter>
          <StyledFilterList>ALL</StyledFilterList>
          <StyledFilterList>DOCUMENTARY</StyledFilterList>
          <StyledFilterList>COMEDY</StyledFilterList>
          <StyledFilterList>HORROR</StyledFilterList>
          <StyledFilterList>CRIME</StyledFilterList>
        </StyledFilter>
        <StyledSort>SORT BY: RELEASE DATE</StyledSort>
      </StyledResult>
    </>
  );
};

export default MainSectionHeader;
