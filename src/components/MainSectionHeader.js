import React, { useState } from "react";
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
const StyledSpan = Styled.span`
margin: 0 15px 0 0;
color: #555;
`
const StyledDate = Styled.div`
`
const MainSectionHeader = () => {
  const [filterList] = useState([
    "ALL",
    "DOCUMENTARY",
    "COMEDY",
    "HORROR",
    "CRIME",
  ]);
  return (
    <>
      <StyledResult>
        <StyledFilter>
          {filterList.map((item,key) => (
            <StyledFilterList key={key}>{item}</StyledFilterList>
          ))}
        </StyledFilter>
        <StyledSort>
          <StyledSpan>SORT BY</StyledSpan>
          <StyledDate>RELEASE DATE</StyledDate>
        </StyledSort>
      </StyledResult>
    </>
  );
};

export default MainSectionHeader;
