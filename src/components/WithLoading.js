import React from "react";

const WithLoading = (Component) => {
  const LoadingIndicator = () => <h4>Please wait...</h4>;
  return function WithLoadingComp({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <LoadingIndicator />;
  };
};
export default WithLoading;
