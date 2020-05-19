import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import "./fonts/fonts.css";
import { NewColor, Colors, ColorDetailsContainer } from "./components/Containers";
import Menu from "./components/SortMenu/SortMenu";

const App = () => (
  <Switch>
    <Route exact path="/:id" component={ColorDetailsContainer} />
    <Route
      path="/"
      component={() => (
        <div className="app">
          <div className="title">COLORS</div>
          <Route component={Menu} />
          <NewColor />
          <Switch>
            <Route exact path="/" component={Colors} />
            <Route path="/sort/:sort" component={Colors} />
          </Switch>
        </div>
      )}
    />
  </Switch>
);

export default App;
