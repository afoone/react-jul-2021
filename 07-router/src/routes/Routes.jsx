import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../views/About";
import Hola from "../views/Hola";
import Home from "../views/Home";
import NotFound from "../views/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About} />
      <Route path="/hola/:nombre" component={Hola}/>
      <Route path="/" component={NotFound}></Route>
    </Switch>
  );
};

export default Routes;
