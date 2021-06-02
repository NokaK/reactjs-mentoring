import React, { useState } from "react";
import Styled from "styled-components";
import { useHistory } from "react-router-dom";
const StyledTitle = Styled.h1`
  color: #fff;
  font-size: 40px;
  margin: 50px 0 20px 70px;
`;
const StyledInputWrapper = Styled.form`
 margin: 0 70px;
 display: flex;
`;
const StyledInput = Styled.input`
 width: calc(100% - 200px);
 margin: 0 15px 0 0;
 background: #232323;
 border: none;
 border-radius: 5px;
 color: #fff;
 font-size: 20px;
 padding: 15px;
`;
const StyledInputButton = Styled.button`
width: 200px;
color: #fff;
font-size: 24px;
padding: 15px 0 ;
background-color: #f65261; 
border: none;
border-radius: 5px;
`;
const FirstSectionSearch = (props) => {
  const [input, setInput] = useState("");

  const history = useHistory();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    history.push("/search?" + input);
    setInput("");
  };
  const handleSearchChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <StyledTitle>FIND YOUR MOVIE</StyledTitle>
      <StyledInputWrapper onSubmit={handleSearchSubmit}>
        <StyledInput
          placeholder="What do you want to watch?"
          onChange={handleSearchChange}
          value={input}
        />
        <StyledInputButton type="submit">SEARCH</StyledInputButton>
      </StyledInputWrapper>
    </>
  );
};
export default FirstSectionSearch;
