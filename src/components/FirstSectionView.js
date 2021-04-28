import React, { useContext } from "react";
import { MovieContext } from "../context/MovieDetailsContext";
import FirstSection from "./FirstSection";
import MovieDietails from "./MovieDietails";

function FirstSectionView() {
  const [details] = useContext(MovieContext);

  return <div>{!details ? <FirstSection /> : <MovieDietails />}</div>;
}

export default FirstSectionView;
