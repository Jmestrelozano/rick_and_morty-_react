import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Favoritos } from "../components/seccionFavoritos/Favoritos";

import { RickyMortyPages } from "../pages/rickyMortyPages";

export const AppRouter = () => {
  return (
    <Router basename="/RickyAndMorty">
      <Route exact path="/Principal" component={RickyMortyPages} />
      <Switch>
        <Route exact path="/Principal/Favoritos" component={Favoritos} />
      </Switch>
      <Redirect to="/Principal" />
    </Router>
  );
};
