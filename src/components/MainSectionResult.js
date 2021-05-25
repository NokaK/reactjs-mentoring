import React, { useContext, useState, useCallback } from "react";
import Styled from "styled-components";
import GlobalPopUp from "./GlobalPopUp";
import DropDown from "./DropDown";
import { ChosenMovieContext } from "../context/MovieIdContext";
import { MovieContext } from "../context/MovieDetailsContext";
const StyledImage = Styled.img`
width: 100%;
`;
const StyledInfoWrapper = Styled.div`

color: #fff;
display: flex; 
justify-content: space-between;
align-items: flex-start;
margin: 10px 0 0;
`;
const StyledTitle = Styled.h5`
margin: 0 20px 0 0 ;
font-size: 20px;
`;
const StyledRating = Styled.span`
margin: 0 10px 0 0;
`;
const StyledDate = Styled.div`
border: 1px solid #fff;
padding: 5px 10px;
border-radius: 5px;

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
  margin: 0;
}
`;
const StyledBlock = Styled.div`
width: calc(100% / 3 - 50px);
margin: 0 50px 50px 0;
position: relative;
&:nth-child(3n){
  margin: 0 0 50px 0;
}
`;
const MainSectionResult = (props) => {
  const [details, SetDetails] = useContext(MovieContext);
  const [choosenMovie, setChoosenMovie] = useContext(ChosenMovieContext);
  const [move, setMove] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const onMouseEnter = useCallback(
    (index) => {
      if (props.item.id === index) {
        setMove(true);
      }
    },
    [setMove, props.item.id]
  );

  const onMouseLeave = useCallback(
    (index) => {
      if (props.item.id === index) {
        setMove(false);
      }
    },
    [setMove, props.item.id]
  );

  const handleMovieDetails = useCallback(
    (e, key) => {
      SetDetails(true);
      setChoosenMovie(key);
    },
    [setChoosenMovie, SetDetails]
  );

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
    setEditModal(false);
    setDeleteModal(false);
  };
  const renderPosts = () => {
    if (props.loading) {
      return <h1>loading</h1>;
    }
    return (
      <>
        <StyledBlock
          key={props.id}
          onMouseEnter={() => onMouseEnter(props.item.id)}
          onMouseLeave={() => onMouseLeave(props.item.id)}
          onClick={(e) => handleMovieDetails(e, props.item.id)}
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
              movieInfo={props.item}
              handleClosePopup={handleClosePopup}
              editModal={editModal}
              deleteModal={deleteModal}
            />
          ) : null}
          <StyledImage src={props.item.poster_path} alt={props.item.title} />
          <StyledInfoWrapper>
            <div>
              <StyledTitle>{props.item.title}</StyledTitle>
              <div>
                {props.item.genres.map((genre, key) => (
                  <StyledRating key={key}>{genre}</StyledRating>
                ))}
              </div>
            </div>
            <StyledDate>{props.item.release_date}</StyledDate>
          </StyledInfoWrapper>
        </StyledBlock>
      </>
    );
  };

  return <>{renderPosts()}</>;
};
export default MainSectionResult;
