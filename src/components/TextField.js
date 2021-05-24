import React from "react";
import { ErrorMessage, useField } from "formik";
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
export const TextField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <StyledInputBlock>
      <Styledlabel htmlFor={field.name}>{label}</Styledlabel>
      <StyledInput {...field} {...props} autoComplete="off" />
      <ErrorMessage component="div" name={field.name} className="error" />
    </StyledInputBlock>
  );
};
