import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import Styled from "styled-components";
import CustomSelect from "./CustomSelect";
import * as Yup from "yup";

const StyledInputBlock = Styled.div`
display: flex;
flex-direction: column;
margin: 15px 0 0;
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
  const validate = Yup.object({
    title: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    url: Yup.string().required("Required"),
    overview: Yup.string().required("Required"),
    runtime: Yup.string().required("Required"),
    genre: Yup.string().required("Required"),
  });

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [genres] = useState([]);

  const options = [
    { value: "Action", label: "Action" },
    { value: "Adventure", label: "Adventure" },
  ];

  return (
    <>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{
          title: "",
          date: "",
          url: "",
          overview: "",
          runtime: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          const errors = {};
          if (!values.genre) {
            errors.genre = "Required";
          }
          const newMovie = {
            values,
            genres,
            id: state.items.length + 1,
          };
          dispatch({
            type: "ADD_MOVIE",
            payload: newMovie,
          });
          props.handleClosePopup();
        }}
      >
        {(formik) => (
          <Form>
            <TextField label="title" name="title" type="text" />
            <TextField label="date" name="date" type="text" />
            <TextField label="URL" name="url" type="text" />
            <StyledInputBlock>
              <CustomSelect
                onChange={(value) => formik.setFieldValue("genre", value.value)}
                value={formik.values.genre}
                options={options}
              />
              {formik.errors.genre ? (
                <div className="error">{formik.errors.genre}</div>
              ) : null}
            </StyledInputBlock>
            <TextField label="overview" name="overview" type="text" />
            <TextField label="runtime" name="runtime" type="text" />
            <StyledButtonBlock>
              <StyledReset type="reset" value="reset" />
              <StyledSubmit type="submit" value="Submit" />
            </StyledButtonBlock>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default MoviePopUp;
