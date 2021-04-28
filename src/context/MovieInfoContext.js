import React, { createContext, useState, useEffect } from "react";

export const InfoContext = createContext();

export const MovieInfoProvider = (props) => {
  const [movies, setMovies] = useState([]);

  const getData = () => {
    setMovies([
      {
        title: "Pulp Fiction",
        genre: "Action & Adventure",
        year: 2004,
        src: require("../image/Pulp_Fiction.jpg").default,
        id: 1,
      },
      {
        title: "Bohemian Rhapsody",
        genre: "Drama, Biography, Music",
        year: 2003,
        src: require("./../image/Bohemian_Rhapsody.png").default,
        id: 2,
      },
      {
        title: "Kill Bill",
        genre: "Oscar winning Movie",
        year: 1994,
        src: require("./../image/kill_bill.jpg").default,
        id: 3,
      },
      {
        title: "Avengers: War Of Infinity",
        genre: "Action & Adventure",
        year: 2004,
        src: require("./../image/Avengers_Infinity_war.jpg").default,
        id: 4,
      },
      {
        title: "Inception",
        genre: "Action & Adventure",
        year: 2003,
        src: require("./../image/inception.jpg").default,
        id: 5,
      },
      {
        title: "Reservoir Dogs",
        genre: "Oscar winning Movie",
        year: 1994,
        src: require("./../image/reservoir_dogs.jpg").default,
        id: 6,
      },
    ]);
  };
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, []);
  return (
    <InfoContext.Provider value={[movies, setMovies]}>
      {props.children}
    </InfoContext.Provider>
  );
};
