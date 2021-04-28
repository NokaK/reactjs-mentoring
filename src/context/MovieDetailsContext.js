
import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [details, setDetails] = useState(false);
  return (
    <MovieContext.Provider value={[details, setDetails]}>
      {props.children}
    </MovieContext.Provider>
  );
};
