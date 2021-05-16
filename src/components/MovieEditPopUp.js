import React, { useState } from "react";
import Styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

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
`;

const MovieEditPopUp = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [updateMovie, setUpdateMovie] = useState({
    title: null,
    date: null,
    overview: null,
    runtime: null,
  });
  const handleTitleChange = (e, id) => {
    const items = state.items.slice();
    const itemElement = items.find((el) => id === el.id);
    itemElement.title = e.target.value;
    const itemIndex = items.indexOf(itemElement);
    items[itemIndex] = itemElement;
    setUpdateMovie({ title: items });
  };
  const handleDateChange = (e, id) => {
    const items = state.items.slice();
    const itemElement = items.find((el) => id === el.id);
    itemElement.release_date = e.target.value;
    const itemIndex = items.indexOf(itemElement);
    items[itemIndex] = itemElement;
    setUpdateMovie({ date: items });
  };
  const handleOverviewChange = (e, id) => {
    const items = state.items.slice();
    const itemElement = items.find((el) => id === el.id);
    itemElement.overview = e.target.value;
    const itemIndex = items.indexOf(itemElement);
    items[itemIndex] = itemElement;
    setUpdateMovie({ overview: items });
  };
  const handleRuntimeChange = (e, id) => {
    const items = state.items.slice();
    const itemElement = items.find((el) => id === el.id);
    itemElement.runtime = e.target.value;
    const itemIndex = items.indexOf(itemElement);
    items[itemIndex] = itemElement;
    setUpdateMovie({ runtime: items });
  };
  
  
  const submiUpdatedMovie = (e) => {
 
    e.stopPropagation()
    e.preventDefault()
    console.log('zdczd')
    dispatch({
      type: "EDIT_MOVIE",
      payload: updateMovie,
    });
    props.handleClosePopup();
  };

  return (
    <>
      <h1>EDIT MOVIE</h1>
      <form onSubmit={submiUpdatedMovie}>
        <StyledInputBlock>
          <Styledlabel>MOVIE ID</Styledlabel>
          <StyledId value={props.movieInfo.id} />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>TITLE</Styledlabel>
          <StyledInput
            type="text"
            name="title"
            onChange={(e) => handleTitleChange(e, props.movieInfo.id)}
            value={props.movieInfo.title}
          />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>RELEASE DATE</Styledlabel>
          <StyledInput
            type="text"
            name="date"
            onChange={(e) => handleDateChange(e, props.movieInfo.id)}
            value={props.movieInfo.release_date}
          />
        </StyledInputBlock>
        {/* <StyledInputBlock>
          <Styledlabel>MOVIE URL</Styledlabel>
          <StyledInput type="URL" placeholder="www.moana.com" name="url" />
        </StyledInputBlock> */}
        <StyledInputBlock>
          <Styledlabel>GENRE</Styledlabel>
          <StyledSelect>
            {props.movieInfo.genres.map((genre, key) => (
              <option key={key}>{genre}</option>
            ))}
          </StyledSelect>
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>OVERVIEW</Styledlabel>
          <StyledInput
            type="text"
            value={props.movieInfo.overview}
            onChange={(e) => handleOverviewChange(e, props.movieInfo.id)}
            name="overview"
          />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>RUNTIME</Styledlabel>
          <StyledInput
            type="text"
            value={props.movieInfo.runtime}
            onChange={(e) => handleRuntimeChange(e, props.movieInfo.id)}
            name="runtime"
          />
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
