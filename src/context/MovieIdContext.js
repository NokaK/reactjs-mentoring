
import React, { createContext, useState } from "react";

export const ChosenMovieContext = createContext();

export const ChosenMovieProvider = (props) => {
  const [choosenMovie, setChoosenMovie] = useState(null);
  return (
    <ChosenMovieContext.Provider value={[choosenMovie, setChoosenMovie]}>
      {props.children}
    </ChosenMovieContext.Provider>
  );
};
