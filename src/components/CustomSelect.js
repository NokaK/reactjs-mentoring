import React from "react";
import Select from "react-select";
import Styled from "styled-components";
const Styledlabel = Styled.label`
color: #f65261;
font-size: 18px;
margin: 0 0 10px;
`;

export default ({ onChange, options, value }) => {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };
  return (
    <>
      <Styledlabel>GENRE</Styledlabel>
      <Select
        className="select"
        value={defaultValue(options, value)}
        onChange={(value) => {
          onChange(value);
        }}
        options={options}
      />
    </>
  );
};
