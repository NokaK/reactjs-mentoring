import React from "react";
import Styled from "styled-components";

const StyledText = Styled.h4`
color: #fff;
text-align: center;
font-size: 30px;
`
const WithLoading = (Component) => {
  const LoadingIndicator = () => <StyledText>Please wait...</StyledText>;
  return function WithLoadingComp({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <LoadingIndicator />;
  };
};
export default WithLoading;
