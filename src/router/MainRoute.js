import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "../components/MainPage";
import My404Component from "../components/My404Component";
function MainRoute() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact   component={MainPage} />
          <Route path="/film/:id" component={MainPage} />
          <Route path="/search" component={MainPage}/>
          <Route path="*"   component={My404Component} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default MainRoute;
