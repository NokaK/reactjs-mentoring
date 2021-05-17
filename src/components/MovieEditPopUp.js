import React, { useEffect, useState } from "react";
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
  const [updateMovieTitle, setUpdateMovieTitle] = useState('');
  const [updateDate, setUpdateDate] = useState('');
  const [editMovie, setEditMovie] = useState({
    id: '',
    title: '',
    release_date: '',
    runtime: '',
    overview: ''
  })
  useEffect(() => {
    
    const movie = state.items.find( movie => props.movieInfo.id  === movie.id)
  
    
    setEditMovie({
      id: movie.id,
      title: movie.title,
      release_date:  movie.release_date,
      runtime: movie.runtime,
      overview: movie.overview
    })
    
   
    // setEditMovie(props.movieInfo.id)
  },[state,  props.movieInfo.id])
  console.log(editMovie)
  const handleTitleChange = (e, formControl) => {
    const movie = {...editMovie}
    movie[formControl] = e.target.value

    setEditMovie(movie)
    // const items = state.items.slice();
    // const itemElement = items.find((el) => id === el.id);
    // itemElement.title = e.target.value;
    // const itemIndex = items.indexOf(itemElement);
    // items[itemIndex] = itemElement;
    // setUpdateMovieTitle(items);
  };
 
  const submiUpdatedMovie = (e) => {
    
    dispatch({
      type: "EDIT_MOVIE",
      payload: editMovie,
    });
    props.handleClosePopup();
  };
  return (
    <>
      <h1>EDIT MOVIE</h1>
      <form>
        <StyledInputBlock>
          <Styledlabel>MOVIE ID</Styledlabel>
          <StyledId value={props.movieInfo.id} />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>TITLE</Styledlabel>
          <StyledInput
            type="text"
            name="title"
            onChange={(e) => handleTitleChange(e, 'title')}
            value={editMovie.title}
          />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>RELEASE DATE</Styledlabel>
          <StyledInput
            type="text"
            name="date"
            onChange={(e) => handleTitleChange(e, 'release_date')}
            value={editMovie.release_date}
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
            value={editMovie.overview}
            onChange={(e) => handleTitleChange(e, 'overview')}
            name="overview"
          />
        </StyledInputBlock>
        <StyledInputBlock>
          <Styledlabel>RUNTIME</Styledlabel>
          <StyledInput
            type="text"
            value={editMovie.runtime}
            onChange={(e) => handleTitleChange(e, 'runtime')}
            name="runtime"
          />
        </StyledInputBlock>
        <StyledButtonBlock>
          <StyledReset type="reset" value="RESET" />
          <StyledSubmit type="submit" value="SUBMIT"  onClick={submiUpdatedMovie}/>
        </StyledButtonBlock>
      </form>
    </>
  );
};
export default MovieEditPopUp;
