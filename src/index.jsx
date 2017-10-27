import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';  // eslint-disable-line import/no-extraneous-dependencies
import App from './App';
import './stylesheets/main.scss';

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app-container'),
);

if (module.hot) {
  module.hot.accept(App, () => render(App));
}
