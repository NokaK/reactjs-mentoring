import React, { useContext, useState } from "react";
import Styled from "styled-components";
import propTypes from "prop-types";
import MovieEditPopUp from "./MovieEditPopUp";
import DeletePopUp from "./DeletePopUp";
import { MovieContext } from "../context/MovieDetailsContext";
const StyledFilterItem = Styled.div`
margin: 50px 50px 0 0;
width: calc(100% / 3 - 34px);
position: relative;
&:nth-child(3n){
    margin: 50px 0 0;
}

`;
const StyledFilmImage = Styled.img`
width: 100%;
height: 650px;
object-fit:cover;
`;
const StyledFilmInfo = Styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
color: #fff;
margin: 20px 0 0;
`;
const StyledFilmName = Styled.h3`
font-size: 24px;
margin: 0 0 15px;
`;
const StyledGenre = Styled.h4`
font-size: 20px;
margin: 0 0 15px;
`;
const StyledYear = Styled.span`
font-size: 16px;
border: 1px solid #fff;
border-radius: 5px;
padding: 5px 10px;
`;
const StyledDots = Styled.div`
color: #fff;
position: absolute;
top: 20px;
right: 20px;
border-radius: 50%;
background: #232323;
width: 45px;
height: 45px;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
cursor:pointer;
`;
const StyledDot = Styled.span`
width: 5px;
height: 5px;
background: #fff;
border-radius: 50%;
margin: 0 0 5px;
&:last-child{
  marginb: 0;
}
`;
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

const MainSectionResult = (props) => {
  const [details, SetDetails] = useContext(MovieContext);
  const [move, setMove] = useState(false);
  const [click, setClick] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const onMouseEnter = (event) => {
    event.preventDefault();
    setMove(true);
  };

  const onMouseLeave = (event) => {
    event.preventDefault();
    setMove(false);
  };

  const handleOpenModal = (e) => {
    e.preventDefault();
    setClick(true);
  };
  const handleCloseModal = (e) => {
    e.preventDefault();
    setClick(false);
  };

  const handleOpenEditModal = (e) => {
    e.preventDefault();
    setEditModal(true);
  };

  const handleOpendeleteModal = (e) => {
    setDeleteModal(true);
  };

  const handleClosePopup = (e) => {
    e.preventDefault();
    setEditModal(false);
    setDeleteModal(false);
  };
  const handleMovieDetails = (e) => {
    e.preventDefault();
    SetDetails(true);
  };

  return (
    <>
      <StyledFilterItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={handleMovieDetails}
      >
        {move ? (
          <StyledDots onClick={handleOpenModal}>
            <StyledDot></StyledDot>
            <StyledDot></StyledDot>
            <StyledDot></StyledDot>
          </StyledDots>
        ) : null}
        {click ? (
          <StyledDropDown>
            <StyledCloseButton onClick={handleCloseModal} />
            <div>
              <StyledDropdownButton onClick={handleOpenEditModal}>
                edit
              </StyledDropdownButton>
              <StyledDropdownButton onClick={handleOpendeleteModal}>
                delete
              </StyledDropdownButton>
            </div>
          </StyledDropDown>
        ) : null}
        {editModal ? (
          <>
            <StyledPopup>
              <StyledPopupContent>
                <MovieEditPopUp id={props.id} />
                <StyledPopUpCloseButton onClick={handleClosePopup} />
              </StyledPopupContent>
            </StyledPopup>
          </>
        ) : null}
        {deleteModal ? (
          <>
            <StyledPopup>
              <StyledPopupContent>
                <DeletePopUp />
                <StyledPopUpCloseButton onClick={handleClosePopup} />
              </StyledPopupContent>
            </StyledPopup>
          </>
        ) : null}

        <StyledFilmImage src={props.src} alt={props.title} />
        <StyledFilmInfo>
          <div>
            <StyledFilmName>{props.title}</StyledFilmName>
            <StyledGenre>{props.genre}</StyledGenre>
          </div>
          <StyledYear>{props.year}</StyledYear>
        </StyledFilmInfo>
      </StyledFilterItem>
    </>
  );
};

MainSectionResult.propTypes = {
  title: propTypes.string.isRequired,
  genre: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
};
MainSectionResult.defaultProps = {
  title: "Coolmovie",
  genre: "Cool Genre",
  year: 2021,
};

export default MainSectionResult;
