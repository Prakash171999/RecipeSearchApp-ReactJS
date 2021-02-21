import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Home";
import App from "../App";

const Router = () => (
      <BrowserRouter>
            <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/search" component={App} />
            </Switch>
      </BrowserRouter>
);

export default Router;