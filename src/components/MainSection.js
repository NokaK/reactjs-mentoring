import React from "react";
import Styled from "styled-components";
import MainSectionHeader from "./MainSectionHeader";
import MainSectionResult from "./MainSectionResult";
import ErrorBoundary from "./ErrorBoundary";
// import WithLoading from "./WithLoading";

//const ListWithLoading = WithLoading(MainSectionResult)
const StyledFilterResult = Styled.h2`
color: #fff;
margin: 20px 0;
font-size: 20px;
`;
const StyledFilterItems = Styled.div`
display: flex;
flex-wrap: wrap;
`;
const StyledBody = Styled.div`
background-color: #232323;
padding: 20px 50px;
`;

class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  getData() {
    setTimeout(() => {
      this.setState({
        movies: [
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
        ],
      });
    }, 1000);
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        <StyledBody>
          <MainSectionHeader />
          <ErrorBoundary>
            <StyledFilterResult>39 movies found</StyledFilterResult>
            <StyledFilterItems>
              {this.state.movies.map((movie, key) => (
                <MainSectionResult
                  title={movie.title}
                  genre={movie.genre}
                  year={movie.year}
                  src={movie.src}
                  key={key}
                  id={movie.id}
                />
              ))}
            </StyledFilterItems>
          </ErrorBoundary>
        </StyledBody>
      </div>
    );
  }
}

export default MainSection;
