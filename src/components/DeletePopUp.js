import React from "react";
import Styled from "styled-components";

const StyledInputBlock = Styled.div`
display: flex;
flex-direction: column;
margin: 15px 0 0;
`;

const StyledQuestion = Styled.h5`
font-size: 18px;
margin: 0 0 10px;
`;

const StyledButtonBlock = Styled.div`
display: flex;
margin: 30px 0 0;
justify-content: flex-end;
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

const DeletePopUp = () => {
  return (
    <>
      <h1>DELETE MOVIE</h1>
      <StyledInputBlock>
        <StyledQuestion>
          Are you sure wou want to delete this movie?
        </StyledQuestion>
      </StyledInputBlock>

      <StyledButtonBlock>
        <StyledSubmit type="submit" value="CONFIRM" />
      </StyledButtonBlock>
    </>
  );
};
export default DeletePopUp;
