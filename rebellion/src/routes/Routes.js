import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Index from '../pages/Index'
import ShowPeople from '../pages/ShowPeople';
import ShowPlanets from '../pages/ShowPlanets';
import ShowStarships from '../pages/ShowStarships';



function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/index" component={Index} />
        <Route exact path="/personnages" component={ShowPeople} />
        <Route exact path="/starships" component={ShowStarships} />
        <Route exact path="/planetes" component={ShowPlanets} />



      </Switch>
    </Router>
  );
}

export default Routes;
