import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    this.props.loggedIn === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )}/>
);

export default PrivateRoute;
