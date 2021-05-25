import React from "react";
import Styled from "styled-components";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";

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

const MovieEditPopUp = (props) => {
  const dispatch = useDispatch();

  const validate = Yup.object({
    title: Yup.string().required("Required"),
    release_date: Yup.string().required("Required"),
    tagline: Yup.string().required("Required"),
    overview: Yup.string().required("Required"),
    runtime: Yup.number().required("Required"),
  });

  return (
    <>
      <h1>EDIT MOVIE</h1>
      <Formik
        initialValues={{
          id: props.movieInfo.id,
          title: props.movieInfo.title,
          release_date: props.movieInfo.release_date,
          tagline: props.movieInfo.tagline,
          overview: props.movieInfo.overview,
          runtime: props.movieInfo.runtime,
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
          dispatch({
            type: "EDIT_MOVIE",
            payload: values,
          });
          props.handleClosePopup();
        }}
      >
        {(formik) => (
          <Form>
            <TextField label="id" name="id" type="text" readOnly />
            <TextField label="title" name="title" type="text" />
            <TextField label="date" name="release_date" type="text" />
            <TextField label="tagline" name="tagline" type="text" />
            <TextField label="overview" name="overview" type="text" />
            <TextField label="runtime" name="runtime" type="text" />
            <StyledButtonBlock>
              <StyledReset type="reset" value="Reset" />
              <StyledSubmit type="submit" value="Submit" />
            </StyledButtonBlock>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default MovieEditPopUp;
