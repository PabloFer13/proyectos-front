import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import Home from './containers/Home';
import Crear from './containers/Crear';
import Buscar from './containers/Buscar';

const Routes = ({ location }) => (
  <Switch location={location}>
    <Route exact path="/buscar" component={Buscar} />
    <Route exact path="/crear" component={Crear} />
    <Redirect to="/buscar" />
  </Switch>
);

const mapStateToProps = ({ router }) => ({ location: router.location });

export default connect(mapStateToProps)(Routes);
