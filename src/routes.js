import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import Home from './containers/Home';
import Crear from './containers/Crear';
import Usuarios from './containers/Usuarios';

const Routes = ({ location }) => (
  <Switch location={location}>
    <Route exact path="/users" component={Usuarios} />
    <Route exact path="/crear" component={Crear} />
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);

const mapStateToProps = ({ router }) => ({ location: router.location });

export default connect(mapStateToProps)(Routes);
