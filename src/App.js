import React from "react";
import FirstSection from './components/FirstSection';
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="App">
      <FirstSection/> 
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default App;
