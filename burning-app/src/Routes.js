
import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';

import Search from './components/Search';
import Airplane from './components/Airplane';
import Reservation from  './components/Reservation';

const Routes = (
  <Router>
    <div>
    <Route exact path="/" component={ Search }/>
    <Route exact path="/airplanes" component={ Airplane }/>
    <Route exact path="/reservation" component={ Reservation }  />


  </div>
</Router>
);

export default Routes;
