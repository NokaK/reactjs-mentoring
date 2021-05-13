import React, { useState } from "react";
import Styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
const StyledResult = Styled.div`
display: flex;
justify-content: space-between;
align-items : center;
border-bottom: 3px groove #424242;
border-radius: 5px;
padding: 0 0 10px; 
position: relative;
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
cursor: pointer;
`;
const StyledSpan = Styled.span`
margin: 0 15px 0 0;
color: #555;
`;
const StyledDate = Styled.div`
`;
const StyledSortedContent = Styled.select`
border-radius: 6px;
width: 200px;
position: absolute;
top: 55px;
right: 0;
height: 40px;
background-color: #fff;
z-index: 10;
`;
const StyledSortedContentList = Styled.option`
color: #232323;
background-color: #fff;
padding: 10px;
cursor: pointer;
list-style: none;
border-radius: 6px;
&:hover {
  color:  #fff;
  background-color: #bbb1b1;
}
`;
const MainSectionHeader = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [filterList] = useState([
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "DOCUMENTARY",
    "COMEDY",
    "HORROR",
    "CRIME",
  ]);
  const [sortingName, setSortingName] = useState("");
  const [sortingItem] = useState([
    "sort by",
    "release date",
    "raiting",
    "genre",
  ]);
  const [isOpen, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!isOpen);
  };
  const onFilterChange = (item, key) => {
    const filtered = filterList.filter((genreFilter, key) => genreFilter  == item);
    dispatch({
      type: "SET_FILTER",
      payload: filtered,
    });
  };
  const onSortingChange = (sorting) => {
    if (sorting == "release date") {
      const sortedReleaseDate = state.items.sort((a, b) =>
        a.title < b.title ? -1 : null
      );
      dispatch({
        type: "SET_SORTING",
        payload: sortedReleaseDate,
      });
    } else {
      console.log("nothin");
    }
    setSortingName(sorting);
  };

  return (
    <>
      <StyledResult>
        <StyledFilter>
          {filterList.map((item, key) => (
            <StyledFilterList
              key={key}
              onClick={() => onFilterChange(item,key)}
            >
              {item}
            </StyledFilterList>
          ))}
        </StyledFilter>
        <StyledSort onClick={toggleDropdown}>
          <StyledSpan>SORT BY</StyledSpan>
          <StyledDate>{sortingName}</StyledDate>
        </StyledSort>
        {isOpen ? (
          <StyledSortedContent
            onChange={(e) => onSortingChange(e.target.value)}
          >
            {sortingItem.map((item, key) => (
              <StyledSortedContentList value={item} key={key}>
                {item}
              </StyledSortedContentList>
            ))}
          </StyledSortedContent>
        ) : null}
      </StyledResult>
    </>
  );
};

export default MainSectionHeader;
