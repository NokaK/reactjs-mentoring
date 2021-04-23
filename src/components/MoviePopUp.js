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
const StyledButtonBlock =  Styled.div`
display: flex;
margin: 30px 0 0;
justify-content: flex-end;
`
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
`
const StyledSubmit = Styled.input`
border-radius: 6px;
background-color: #f65261;
border: none;
font-size: 16px;
padding: 15px 10px;
color:#fff;
width: 150px;
cursor: pointer;
`

const MoviePopUp = () => {

  return (
    <>
   
      <h1>addmovie</h1>
      <form>
        <StyledInputBlock>
          <Styledlabel>TITLE</Styledlabel>
          <StyledInput type="text" name="title" />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>RELEASE DATE</Styledlabel>
          <StyledInput type="date" name="date" />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>MOVIE URL</Styledlabel>
          <StyledInput type="URL" placeholder="MOVIE URL gere" name="url" />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>GENRE</Styledlabel>
          <StyledSelect>
            <option>Select genre</option>
            <option value="Action & Adventure">Action & Adventure</option>
            <option value="Oscar winning Movie">Oscar winning Movie</option>
          </StyledSelect>
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>OVERVIEW</Styledlabel>
          <StyledInput
            type="text"
            placeholder="OVERVIEW here"
            name="overview"
          />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>RUNTIME</Styledlabel>
          <StyledInput
            type="text"
            placeholder="RUNTIME here"
            name="runtime"
          />
        </StyledInputBlock>
        <StyledButtonBlock>
          <StyledReset type="reset" value='RESET'/>
          <StyledSubmit type="submit" value='SUBMIT'/>
        </StyledButtonBlock>
      </form>
    </>
  );
};
export default MoviePopUp;
