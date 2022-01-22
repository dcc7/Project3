import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import 'antd/dist/antd.css';
import store from './app/store'; //importing the redux store defined in store.js, passed down as a prop.

ReactDOM.render(
  //every single component should now has access to the store variable using provider from redux.
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'));
