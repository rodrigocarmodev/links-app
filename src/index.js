import TokenRefresher from './components/TokenRefresher';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { Provider } from 'react-redux';

import store from './store';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <TokenRefresher />
    <App />
  </Provider>,
  document.getElementById('root')
);
