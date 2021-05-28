import React,{useState,useEffect} from "react";
import FirstSectionView from "./FirstSectionView";
import MainSection from "./MainSection";
import Footer from "./Footer";
import {useSelector } from "react-redux";


function MainPage({match}) {
  const [movie,setMovie] = useState(null)
  const state = useSelector((state) => state);
 
  useEffect(()=>{   
    const foundedId =  state.items.find((el) => el.id == match.params.id)
     if(foundedId) {
      setMovie(foundedId)
     } 
  }, [match.params.id, state])
  return (
    <>
      <FirstSectionView movie={movie} />
      <MainSection movie={movie} />
      <Footer />
    </>
  );
}

export default MainPage;
