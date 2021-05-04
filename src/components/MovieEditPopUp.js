import React from "react";
import Styled from "styled-components";

const StyledInputBlock = Styled.div`
display: flex;
flex-direction: column;
margin: 15px 0 0;
`;

const Styledlabel = Styled.label`
color: #f65261;
font-size: 18px;
margin: 0 0 10px;
`;

const StyledInput = Styled.input`
border-radius: 6px;
background-color: #424242;
border: none;
font-size: 16px;
padding: 10px;
color: #fff;
`;
const StyledSelect = Styled.select`
border-radius: 6px;
background-color: #424242;
border: none;
font-size: 16px;
padding: 10px;
color: #fff;
`;
const StyledButtonBlock = Styled.div`
display: flex;
margin: 30px 0 0;
justify-content: flex-end;
`;
const StyledReset = Styled.input`
border-radius: 6px;
background-color: transparent;
border: 2px solid #f65261;
font-size: 16px;
padding: 15px 10px;
margin: 0 15px 0 0; 
color: #f65261;
width: 150px;
cursor: pointer;
&::placeholder {
  color: #f65261;
}
`;
const StyledSubmit = Styled.input`
border-radius: 6px;
background-color: #f65261;
border: none;
font-size: 16px;
padding: 15px 10px;
color:#fff;
width: 150px;
cursor: pointer;
`;
const StyledId = Styled.h5`
margin: 10px 0;
`

const MovieEditPopUp = (props) => {
  return (
    <>
      <h1>EDIT MOVIE</h1>
      <form>
      <StyledInputBlock>
          <Styledlabel>MOVIE ID</Styledlabel>
          <StyledId>{props.movieInfo.id}</StyledId>
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>TITLE</Styledlabel>
          <StyledInput type="text" name="title" placeholder={props.movieInfo.title}/>
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>RELEASE DATE</Styledlabel>
          <StyledInput type="text" name="date" placeholder={props.movieInfo.year}/>
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>MOVIE URL</Styledlabel>
          <StyledInput type="URL" placeholder="www.moana.com" name="url" />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>GENRE</Styledlabel>
          <StyledSelect>
            <option>{props.movieInfo.genre}</option>
          </StyledSelect>
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>OVERVIEW</Styledlabel>
          <StyledInput
            type="text"
            placeholder="Overview text goes here"
            name="overview"
          />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>RUNTIME</Styledlabel>
          <StyledInput type="text" placeholder="Runtime text goes here" name="runtime" />
        </StyledInputBlock>
        <StyledButtonBlock>
          <StyledReset type="reset" value="RESET" />
          <StyledSubmit type="submit" value="SUBMIT" />
        </StyledButtonBlock>
      </form>
    </>
  );
};
export default MovieEditPopUp;
