import React from "react";
import Styled from "styled-components";

const StyledErrorText = Styled.h4`
    text-align:  center;
    font-size: 30px;
    color: #fff;
`
const ErrorBoundary = (props) => {
  const ErrText = () => {
    return (
      <>
        <StyledErrorText>Something went wrong</StyledErrorText>;
      </>
    );
  };

  let result = true;
  return <>{result ? props.children : <ErrText />}</>;
};

export default ErrorBoundary;
