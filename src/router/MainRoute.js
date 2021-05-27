import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "../components/MainPage";
import My404Component from "../components/My404Component";

function MainRoute() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={MainPage} />
          <Route path="*" exact={true} component={My404Component} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default MainRoute;
