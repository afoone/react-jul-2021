import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../views/About";
import Hola from "../views/Hola";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import PatientListView from '../views/PatientListView'
import PatientDetailView from '../views/PatientDetailView'
import PatientFormView from '../views/PatientFormView'
import {getPatients} from '../service/patients'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About} />
      <Route exact path="/patients/new" component={PatientFormView}/>
      <Route exact path="/patients">
        <PatientListView getPatients={getPatients}/>
      </Route>
      <Route exact path="/patients/:id/edit" component={PatientFormView}/>
      <Route exact path="/patients/:id" component={PatientDetailView}/>
      <Route path="/hola/:nombre" component={Hola}/>
      <Route path="/" component={NotFound}></Route>
    </Switch>
  );
};

export default Routes;
