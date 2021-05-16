import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const MoviePopUp = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [genres, setGenres] = useState([]);
  const [overview, setOverview] = useState("");
  const [runtime, setRuntime] = useState("");

  const addTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const addDate = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const addURL = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
  };

  const addGenre = (e) => {
    setGenres([e.target.value]);
  };

  const addOverview = (e) => {
    e.preventDefault();
    setOverview(e.target.value);
  };

  const addRuntime = (e) => {
    e.preventDefault();
    setRuntime(e.target.value);
  };

  const submitMovie = (e) => {
    e.preventDefault(e);
    const newMovie = {
      title,
      date,
      url,
      genres,
      overview,
      runtime,
      id: state.items.length + 1,
    };
    dispatch({
      type: "ADD_MOVIE",
      payload: newMovie,
    });
    setTitle("");
    setDate("");
    setUrl("");
    setGenres([]);
    setOverview("");
    setRuntime("");
    props.handleClosePopup()
  };
  return (
    <>
      <h1>addmovie</h1>
      <form onSubmit={submitMovie}>
        <StyledInputBlock>
          <Styledlabel>TITLE</Styledlabel>
          <StyledInput type="text" name="title" onChange={addTitle} />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>RELEASE DATE</Styledlabel>
          <StyledInput type="date" name="date" onChange={addDate} />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>MOVIE URL</Styledlabel>
          <StyledInput
            type="text"
            placeholder="MOVIE URL gere"
            name="url"
            onChange={addURL}
          />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>GENRE</Styledlabel>
          <StyledSelect onChange={(e) => addGenre(e)}>
            <option>Select genre</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
          </StyledSelect>
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>OVERVIEW</Styledlabel>
          <StyledInput
            type="text"
            placeholder="OVERVIEW here"
            name="overview"
            onChange={addOverview}
          />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>RUNTIME</Styledlabel>
          <StyledInput
            type="text"
            placeholder="RUNTIME here"
            name="runtime"
            onChange={addRuntime}
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
export default MoviePopUp;
