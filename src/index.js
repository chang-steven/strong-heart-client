import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import {withRouter} from 'react-router-dom'
import { history } from './store';

import './index.css';
import App from './components/App';
import store from './store';
const NonBlockApp = withRouter(App)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <NonBlockApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
