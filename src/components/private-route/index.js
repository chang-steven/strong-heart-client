import React from 'react';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
  <Route {...rest} render={(props) => (
    sessionStorage.getItem('token')
      ? <Component {...props} />
      : <Redirect to='/login' />
    )}/>
  );
}

export default PrivateRoute;
