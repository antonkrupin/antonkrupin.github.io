import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/index';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const runApp = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
};

export default runApp;
