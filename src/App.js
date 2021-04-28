import React from "react";
import { MovieProvider } from "./context/MovieDetailsContext";
import { MovieInfoProvider } from "./context/MovieInfoContext";
import FirstSectionView from "./components/FirstSectionView";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    <div className="App">
      <MovieInfoProvider>
        <MovieProvider>
          <FirstSectionView />
          <MainSection />
        </MovieProvider>
      </MovieInfoProvider>
      <Footer />
    </div>
  );
}

export default App;
