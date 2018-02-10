import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { loadAuthToken } from '../../helpers/local-storage';

const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
  <Route {...rest} render={(props) => (
    loadAuthToken()
      ? <Component {...props} />
      : <Redirect to='/' />
    )}/>
  );
}

export default PrivateRoute;
