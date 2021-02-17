import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import * as P from "./pages";
import * as C from "./components";

const Routes = () => {
  return (
    <HashRouter basename="/">
      <C.Navbar />

      <Switch>
        <Route exact path="/" component={P.HomePage} />
        <Route exact path="/movie/:id" component={P.MovieDetailsPage} />
        <Route exact path="/movies" component={P.MoviesListPage} />
        <Route exact path="/person/:id" component={P.PersonDetailsPage} />
        <Route exact path="/tv/:id" component={P.TvShowDetailsPage} />
        <Route exact path="*" component={P.NotFoundPage} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
