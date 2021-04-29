import React from "react";
import Styled from "styled-components";

const StyledDropDown = Styled.div`
width: 200px;
background: #232323;
border-radius: 6px;
width: 200px;
position: absolute;
top: 20px;
right: 20px;   
color: #fff; 
padding: 10px;
`;
const StyledCloseButton = Styled.button`
display: flex;
justify-content: flex-end;
width: 100%;
background:none;
border: none;
cursor: pointer;
position: relative;
&:after{
  content: 'X';
  dispplay:block;
  color: #fff;
  font-size: 10px;
}
`;
const StyledDropdownButton = Styled.button`
background: transparent;
background: none;
display: block;
color: #fff;
border: none;
font-size: 18px;
text-align:center;
cursor: pointer;
padding: 10px 0;
width: 100%;
&:hover {
  background-color: #f65261;
}
`;

const DropDown = ( props ) => {
  return (
    <>
      <StyledDropDown>
        <StyledCloseButton onClick={props.handleCloseModal} />
        <div>
          <StyledDropdownButton onClick={props.handleOpenEditModal}>
            edit
          </StyledDropdownButton>
          <StyledDropdownButton onClick={props.handleOpendeleteModal}>
            delete
          </StyledDropdownButton>
        </div>
      </StyledDropDown>
    </>
  );
};
export default DropDown;
