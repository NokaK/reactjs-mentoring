import React from "react";
import Styled from "styled-components";
import MoviePopUp from "./MoviePopUp";
import MovieEditPopUp from "./MovieEditPopUp";
import DeletePopUp from "./DeletePopUp";

const StyledPopup = Styled.div`
 position: fixed;
 height: 100%;
 width: 100%;
 top: 0;
 left: 0;
 background-color: rgba(0,0,0,0.7);
 display: flex;
 justify-content: center;
 align-items: center;
 z-index: 10;
 padding:15px 0 0;
`;
const StyledPopupContent = Styled.div`
color: #fff;
background-color: #232323;
max-width: 500px;
width: 100%;
max-height: 600px;
overflow-y: auto;
padding: 15px 30px;
border-radius: 6px;
position: relative;
`;
const StyledPopUpCloseButton = Styled.button`
position:absolute;
right: 20px;
top: 20px;
background:none;
border: none;
cursor: pointer;
&:after{
  content: 'X';
  dispplay:block;
  color: #fff;
  font-size: 35px;
}
`;
const GlobalPopUp = (props) => {
  return (
    <>
      <StyledPopup>
        <StyledPopupContent>
          {props.editModal ? (
            <MovieEditPopUp movieInfo={props.movieInfo} />
          ) : null}
          {props.deleteModal ? (
            <DeletePopUp
              movieInfo={props.movieInfo}
            />
          ) : null}
          {props.moveModal ? <MoviePopUp /> : null}
          <StyledPopUpCloseButton onClick={props.handleClosePopup} />
        </StyledPopupContent>
      </StyledPopup>
    </>
  );
};
export default GlobalPopUp;
