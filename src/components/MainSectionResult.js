import React, { useContext, useState, useCallback } from "react";
import { MovieContext } from "../context/MovieDetailsContext";
import { ChosenMovieContext } from "../context/MovieIdContext";
import Styled from "styled-components";
import propTypes from "prop-types";
import GlobalPopUp from "./GlobalPopUp";
import DropDown from "./DropDown";

const StyledFilterItem = Styled.div`
margin: 50px 50px 0 0;
width: calc(100% / 3 - 34px);
position: relative;
&:nth-child(3n){
    margin: 50px 0 0;
}`;
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

const MainSectionResult = (props) => {
  const [details, SetDetails] = useContext(MovieContext);
  const [choosenMovie, setChoosenMovie] = useContext(ChosenMovieContext);
  const [move, setMove] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const onMouseEnter = useCallback((e) => {
    e.preventDefault();
    setMove(true);
  }, [setMove]);

  const onMouseLeave = useCallback((e) => {
    e.preventDefault();
    setMove(false);
  }, [setMove]);

  const handleMovieDetails  = useCallback((e, key) => {
      e.preventDefault();
      SetDetails(true);
      setChoosenMovie(key);
    },[SetDetails,setChoosenMovie]);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setDropDown(true);
  };
  const handleCloseModal = (e) => {
    e.preventDefault();
    setDropDown(false);
  };

  const handleOpenEditModal = (e) => {
    e.preventDefault();
    setEditModal(true);
    setDropDown(false);
  };

  const handleOpendeleteModal = (e) => {
    setDeleteModal(true);
    setDropDown(false);
  };

  const handleClosePopup = (e) => {
    e.preventDefault();
    setEditModal(false);
    setDeleteModal(false);
  };

  return (
    <>
      <StyledFilterItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={(e) => {
          handleMovieDetails(e, props.id);
        }}
      >
        {move ? (
          <StyledDots onClick={handleOpenModal}>
            <StyledDot></StyledDot>
            <StyledDot></StyledDot>
            <StyledDot></StyledDot>
          </StyledDots>
        ) : null}
        {dropDown ? (
          <DropDown
            handleCloseModal={handleCloseModal}
            handleOpenEditModal={handleOpenEditModal}
            handleOpendeleteModal={handleOpendeleteModal}
          />
        ) : null}
        {editModal || deleteModal ? (
          <GlobalPopUp
            id={props.id}
            handleClosePopup={handleClosePopup}
            editModal={editModal}
            deleteModal={deleteModal}
          />
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
