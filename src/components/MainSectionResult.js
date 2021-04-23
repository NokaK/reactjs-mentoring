import React from "react";
import Styled from "styled-components";
import propTypes from "prop-types";
import MovieEditPopUp from './MovieEditPopUp'
import DeletePopUp from './DeletePopUp'

const StyledFilterItem = Styled.div`
margin: 50px 50px 0 0;
width: calc(100% / 3 - 34px);
position: relative;
&:nth-child(3n){
    margin: 50px 0 0;
}

`;
const StyledFilmImage = Styled.img`
width: 100%;
height: 650px;
object-fit:cover;
`;
const StyledFilmInfo = Styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
color: #fff;
margin: 20px 0 0;
`;
const StyledFilmName = Styled.h3`
font-size: 24px;
margin: 0 0 15px;
`;
const StyledGenre = Styled.h4`
font-size: 20px;
margin: 0 0 15px;
`;
const StyledYear = Styled.span`
font-size: 16px;
border: 1px solid #fff;
border-radius: 5px;
padding: 5px 10px;
`;
const StyledDots = Styled.div`
color: #fff;
position: absolute;
top: 20px;
right: 20px;
border-radius: 50%;
background: #232323;
width: 45px;
height: 45px;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
cursor:pointer;
`;
const StyledDot = Styled.span`
width: 5px;
height: 5px;
background: #fff;
border-radius: 50%;
margin: 0 0 5px;
&:last-child{
  marginb: 0;
}
`;
const StyledDropDown = Styled.div`
width: 200px;
background: #232323;
border-radius: 6px;
width: 200px;
position: absolute;
top: 20px;
right: 20px;   
color: #fff; 
padding: 10px;
`;
const StyledCloseButton = Styled.button`
display: flex;
justify-content: flex-end;
width: 100%;
background:none;
border: none;
cursor: pointer;
position: relative;
&:after{
  content: 'X';
  dispplay:block;
  color: #fff;
  font-size: 10px;
}
`;
const StyledDropdownButton = Styled.button`
background: transparent;
background: none;
display: block;
color: #fff;
border: none;
font-size: 18px;
text-align:center;
cursor: pointer;
padding: 10px 0;
width: 100%;
&:hover {
  background-color: #f65261;
}
`;


const StyledPopup = Styled.div`
 position: fixed;
 height: 100%;
 width: 100%;
 top: 0;
 left: 0;
 background-color: rgba(0,0,0,0.7);
 display: flex;
 justify-content: center;
 align-items: center;
 z-index: 10;
 padding:15px 0 0;
`;
const StyledPopupContent = Styled.div`
color: #fff;
background-color: #232323;
max-width: 500px;
width: 100%;
max-height: 600px;
overflow-y: auto;
padding: 15px 30px;
border-radius: 6px;
position: relative;

`;
const StyledPopUpCloseButton = Styled.button`
position:absolute;
right: 20px;
top: 20px;
background:none;
border: none;
cursor: pointer;
&:after{
  content: 'X';
  dispplay:block;
  color: #fff;
  font-size: 35px;
}
`;

class MainSectionResult extends React.Component {
  state = {
    move: false,
    click: false,
    editModal: false,
    deleteModal: false,
  };

  onMouseEnter = (event) => {
    event.preventDefault();
    this.setState({ move: true });
  };

  onMouseLeave = (event) => {
    event.preventDefault();
    this.setState({ move: false });
  };

  handleOpenModal = (e) => {
    e.preventDefault();
    this.setState({ click: true });
  };
  handleCloseModal = (e) => {
    e.preventDefault();
    this.setState({ click: false });
  };

  handleOpenEditModal = (e) => {
    e.preventDefault();
    this.setState({ editModal: true });
  };

  handleOpendeleteModal = (e) => {
    e.preventDefault();
    this.setState({ deleteModal: true });
  };

  handleClosePopup = (e) => {
    e.preventDefault();
    this.setState({ editModal: false, deleteModal: false  });
  };
  render() {
    
    return (
      <>
        <StyledFilterItem
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          {this.state.move ? (
            <StyledDots onClick={this.handleOpenModal}>
              <StyledDot></StyledDot>
              <StyledDot></StyledDot>
              <StyledDot></StyledDot>
            </StyledDots>
          ) : null}
          {this.state.click ? (
            <StyledDropDown>
              <StyledCloseButton onClick={this.handleCloseModal} />
              <div>
                <StyledDropdownButton onClick={this.handleOpenEditModal}>edit</StyledDropdownButton>
                <StyledDropdownButton onClick={this.handleOpendeleteModal}>delete</StyledDropdownButton>
              </div>
            </StyledDropDown>
          ) : null}
            {this.state.editModal ? (
              <>
                <StyledPopup>
                  <StyledPopupContent>
                   <MovieEditPopUp  id={this.props.id}/>
                    <StyledPopUpCloseButton onClick={this.handleClosePopup} />
                  </StyledPopupContent>
                </StyledPopup>
              </>
            ) : null}
            {this.state.deleteModal ? (
              <>
                <StyledPopup>
                  <StyledPopupContent>
                   <DeletePopUp/>
                    <StyledPopUpCloseButton onClick={this.handleClosePopup} />
                  </StyledPopupContent>
                </StyledPopup>
              </>
            ) : null}
           
          <StyledFilmImage src={this.props.src} alt={this.props.title} />
          <StyledFilmInfo>
            <div>
              <StyledFilmName>{this.props.title}</StyledFilmName>
              <StyledGenre>{this.props.genre}</StyledGenre>
            </div>
            <StyledYear>{this.props.year}</StyledYear>
          </StyledFilmInfo>
        </StyledFilterItem>
      </>
    );
  }
}

MainSectionResult.propTypes = {
  title: propTypes.string.isRequired,
  genre: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
};
MainSectionResult.defaultProps = {
  title: "Coolmovie",
  genre: "Cool Genre",
  year: 2021,
};

export default MainSectionResult;
