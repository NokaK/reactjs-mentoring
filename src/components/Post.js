import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./Action";
import Styled from "styled-components";
import GlobalPopUp from "./GlobalPopUp";
import DropDown from "./DropDown";

const StyledBlock = Styled.div`
width: calc(100% / 3 - 50px);
margin: 0 50px 50px 0;
position: relative;
&:nth-child(3n){
  margin: 0 0 50px 0;
}
`;

const StyledFilterItem = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
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
const Post = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [inputVal, setInputVal] = useState("");
  // const [details, SetDetails] = useContext(MovieContext);
  // const [choosenMovie, setChoosenMovie] = useContext(ChosenMovieContext);
  const [move, setMove] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setInputVal(e.target.value);
  };

  const handleCreate = (e) => {
    e.preventDefault(e);
    dispatch({
      type: "ADD_MOVIE",
      payload: inputVal,
    });
    setInputVal("");
  };
  const handleDelete = (key) => {
    const newItems = [...state.items];
    newItems.splice(key, 1);
    dispatch({
      type: "DELETE_MOVIE",
      payload: newItems,
    });
  };

  const handleTitleChange = (e, id) => {
    const items = state.items.slice();
    const itemElement = items.find((el) => id === el.id);
    itemElement.title = e.target.value;
    const itemIndex = items.indexOf(itemElement);
    items[itemIndex] = itemElement;
    dispatch({
      type: "EDIT_MOVIE",
      payload: items,
    });
  };

  const onMouseEnter = useCallback(
    (index) => {
      const hoverMovie  = state.items.find(item => item.id == index  )
      // if (index  == )
      console.log(state.items.map(item => console.log(item.id == index)))
      // e.preventDefault();
      setMove(true);
    },
    [setMove]
  );

  const onMouseLeave = useCallback(
    (e) => {
      e.preventDefault();
      setMove(false);
    },
    [setMove]
  );

  // const handleMovieDetails = useCallback(
  //   (e, key) => {
  //     e.preventDefault();
  //     SetDetails(true);
  //     setChoosenMovie(key);
  //   },
  //   [SetDetails, setChoosenMovie]
  // );

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
  const renderPosts = () => {
    if (state.loading) {
      return <h1>loading</h1>;
    }
    return (
      <>
        {state.items.map((item, index) => (
          <StyledBlock key={item.id}  onMouseEnter={() => onMouseEnter(item.id)}
          onMouseLeave={onMouseLeave}>
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
                movieInfo={item}
                handleClosePopup={handleClosePopup}
                editModal={editModal}
                deleteModal={deleteModal}
              />
            ) : null}
            <StyledImage src={item.poster_path} alt={item.title} />
            <StyledInfoWrapper>
              <div>
                <StyledTitle>{item.title}</StyledTitle>
                <div>
                  {item.genres.map((genre, key) => (
                    <StyledRating key={key}>{genre}</StyledRating>
                  ))}
                </div>
              </div>
              <StyledDate>{item.release_date}</StyledDate>
            </StyledInfoWrapper>
          </StyledBlock>
        ))}
      </>
    );
  };

  return (
    <>
      {/* <div>
        <input
          type="text"
          onChange={handleChange}
          value={inputVal}
          placeholder={inputVal}
        />
        <button onClick={handleCreate}>add</button>
      </div> */}
      <StyledFilterItem
       
        // onClick={(e) => {
        //   handleMovieDetails(e);
        // }}
      >
        {renderPosts()}
      </StyledFilterItem>
    </>
  );
};
export default Post;
