import React from "react";
import FirstSection from "./FirstSection";
import MovieDietails from "./MovieDietails";


function FirstSectionView({movie}) {
  return <div>{!movie ? <FirstSection /> : <MovieDietails />}</div>;
}

export default FirstSectionView;
