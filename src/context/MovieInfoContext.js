import React, { createContext } from "react";
import useFetch from "../components/UseFetch";
export const InfoContext = createContext();

export const MovieInfoProvider = (props) => {
  let movieData = [
    {
      title: "Pulp Fiction",
      genre: "Action & Adventure",
      year: 2004,
      desc: ` Pulp Fiction is a 1994 American neo-noir black comedy crime
      film written and directed by Quentin Tarantino, who conceived
      it with Roger Avary.[4] Starring John Travolta, Samuel L.
      Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman,
      it tells several stories of criminal Los Angeles. The title
      refers to the pulp magazines and hardboiled crime novels
      popular during the mid-20th century, known for their graphic
      violence and punchy dialogue.`,
      src: require("../image/Pulp_Fiction.jpg").default,
      raiting: 8.9,
      time: "2h 58m",
      id: 0,
    },
    {
      title: "Bohemian Rhapsody",
      genre: "Drama, Biography, Music",
      year: 2003,
      desc: `Bohemian Rhapsody is a 2018 biographical drama film directed by Bryan Singer[a] from a screenplay by Anthony McCarten, and produced by Graham King and Queen manager Jim Beach. The film tells the story of the life of Freddie Mercury, the lead singer of the British rock musical band Queen, from the formation of the band up to their 1985 Live Aid performance at the original Wembley Stadium. `,
      src: require("./../image/Bohemian_Rhapsody.png").default,
      raiting: 8,
      time: "2h 13m",
      id: 1,
    },
    {
      title: "Kill Bill",
      genre: "Oscar winning Movie",
      year: 1994,
      desc: `Kill Bill: Volume 1 is a 2003 American martial arts film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, who swears revenge on a team of assassins (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox) and their leader, Bill (David Carradine), after they try to kill her and her unborn child. Her journey takes her to Tokyo, where she battles the yakuza.`,
      src: require("./../image/kill_bill.jpg").default,
      raiting: 8.1,
      time: "1h 30m",
      id: 2,
    },
    {
      title: "Avengers: War Of Infinity",
      genre: "Action & Adventure",
      year: 2004,
      desc: `Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and Avengers: Age of Ultron (2015), and the 19th film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch, Don Cheadle, Tom Holland, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Anthony Mackie, Sebastian Stan, Danai Gurira, Letitia Wright, Dave Bautista, Zoe Saldana, Josh Brolin, and Chris Pratt.`,
      src: require("./../image/Avengers_Infinity_war.jpg").default,
      raiting: 8.4,
      time: "2h 40m",
      id: 3,
    },
    {
      title: "Inception",
      genre: "Action & Adventure",
      year: 2003,
      desc: `Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious.[7] The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page,[a] Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine.`,
      src: require("./../image/inception.jpg").default,
      raiting: 8.3,
      time: "1h 30m",
      id: 4,
    },
    {
      title: "Reservoir Dogs",
      genre: "Oscar winning Movie",
      year: 1994,
      desc: `Reservoir Dogs is a 1992 American crime film written and directed by Quentin Tarantino in his feature-length debut. It stars Harvey Keitel, Tim Roth, Chris Penn, Steve Buscemi, Lawrence Tierney, Michael Madsen, Tarantino, and Edward Bunker as diamond thieves whose planned heist of a jewelry store goes terribly wrong.`,
      src: require("./../image/reservoir_dogs.jpg").default,
      raiting: 8.3,
      time: "1h 30m",
      id: 5,
    },
  ];
  const [movies, setMovies] = useFetch([movieData]);

  return (
    <InfoContext.Provider value={[movies, setMovies]}>
      {props.children}
    </InfoContext.Provider>
  );
};
