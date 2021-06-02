import React from "react";
import FirstSection from "./FirstSection";
import MovieDietails from "./MovieDietails";


function FirstSectionView(props) {
  return <div>{!props.movie ? <FirstSection props={props} /> : <MovieDietails />}</div>;
}

export default FirstSectionView;
