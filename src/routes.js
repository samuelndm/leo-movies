import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import * as P from "./pages";
import * as C from "./components";

const Routes = () => {
  return (
    <HashRouter basename='/'>
      <C.Navbar />

      <Switch>
        <Route exact path='/' component={P.HomePage} />
        <Route exact path='/movie/:id' component={P.MovieInternalPage} />
        <Route exact path='/movies' component={P.MoviesListPage} />
        <Route exact path='/tv/:id' component={P.TvShowInternalPage} />
        <Route exact path='/tv' component={P.TvShowsListPage} />
        <Route exact path='/person/:id' component={P.PersonInternalPage} />
        <Route exact path='/persons' component={P.PersonsListPage} />
        <Route exact path='*' component={P.NotFoundPage} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
