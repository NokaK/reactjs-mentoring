import React from "react";
import { MovieProvider } from "./context/MovieDetailsContext";
import { MovieInfoProvider } from "./context/MovieInfoContext";
import { ChosenMovieProvider } from "./context/MovieIdContext";
import FirstSectionView from "./components/FirstSectionView";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import "./index.css";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./components/Reducer";
import { Provider } from "react-redux";
// import composeWithDevTools from "redux-devtools-extension";

const middleware = [thunk];
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);
const store = createStore(postsReducer, enhancer);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MovieInfoProvider>
          <MovieProvider>
            <ChosenMovieProvider>
              {/* <FirstSectionView /> */}
              <MainSection />
            </ChosenMovieProvider>
          </MovieProvider>
        </MovieInfoProvider>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
