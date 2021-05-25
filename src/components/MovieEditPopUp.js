import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import CustomSelect from "./CustomSelect";
import * as Yup from "yup";

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
  // const [editMovie, setEditMovie] = useState({
  //   id: "",
  //   title: "",
  //   release_date: "",
  //   runtime: "",
  //   overview: "",
  // });
  const validate = Yup.object({
    title: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    url: Yup.string().required("Required"),
    overview: Yup.string().required("Required"),
    runtime: Yup.string().required("Required"),
    genre: Yup.string().required("Required"),
  });

  // useEffect(() => {
  //   const movie = state.items.find((movie) => props.movieInfo.id === movie.id);

  //   setEditMovie({
  //     id: movie.id,
  //     title: movie.title,
  //     release_date: movie.release_date,
  //     runtime: movie.runtime,
  //     overview: movie.overview,
  //   });
  // }, [state, props.movieInfo.id]);

  // const handleMovieChange = (e, formControl) => {
  //   const movie = { ...editMovie };
  //   movie[formControl] = e.target.value;
  //   setEditMovie(movie);
  // };

  const submitUpdatedMovie = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <>
    <form onSubmit={submitUpdatedMovie}>
      <input  type="text"/>
      <input  type="submit"  value="submit"/>
    </form>
      {/* <h1>EDIT MOVIE</h1>

      <Formik
        initialValues={{
          title: props.movieInfo.title,
          date: props.movieInfo.release_date,
          url: "",
          overview: props.movieInfo.overview,
          runtime: props.movieInfo.runtime,
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          alert("values");
          dispatch({
            type: "EDIT_MOVIE",
            payload: values,
          });
          props.handleClosePopup();
        }}
      >
        {(formik) => (
          <Form onSubmit={submitUpdatedMovie}>
            <StyledInputBlock>
              <Styledlabel>MOVIE ID</Styledlabel>
              {props.movieInfo.id}
            </StyledInputBlock>
            <TextField label="title" name="title" type="text" />
            <TextField label="date" name="date" type="text" />
            <TextField label="url" name="url" type="text" />
            <TextField label="overview" name="overview" type="text" />
            <TextField label="runtime" name="runtime" type="text" /> */}
            {/* <StyledInputBlock>
              <Styledlabel>TITLE</Styledlabel>
              <StyledInput
                type="text"
                name="title"
                onChange={(e) => handleTitleChange(e, "title")}
                value={editMovie.title}
              />
            </StyledInputBlock>
            <StyledInputBlock>
              <Styledlabel>RELEASE DATE</Styledlabel>
              <StyledInput
                type="text"
                name="date"
                onChange={(e) => handleTitleChange(e, "release_date")}
                value={editMovie.release_date}
              />
            </StyledInputBlock>
            <StyledInputBlock>
          <Styledlabel>MOVIE URL</Styledlabel>
          <StyledInput type="URL" placeholder="www.moana.com" name="url" />
        </StyledInputBlock>
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
                onChange={(e) => handleTitleChange(e, "overview")}
                name="overview"
              />
            </StyledInputBlock>
            <StyledInputBlock>
              <Styledlabel>RUNTIME</Styledlabel>
              <StyledInput
                type="text"
                value={editMovie.runtime}
                onChange={(e) => handleTitleChange(e, "runtime")}
                name="runtime"
              />
            </StyledInputBlock> */}
            {/* <StyledButtonBlock>
              <StyledReset type="reset" value="Reset" />
              <StyledSubmit type="submit" value="Submit" />
            </StyledButtonBlock>
          </Form>
        )}
      </Formik> */}
     
    </>
  );
};
export default MovieEditPopUp;
