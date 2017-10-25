import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import ScrollToTop from './lib/ScrollToTop';

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <main>
        {/* <Route path="/web" component={Web} /> */}
      </main>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
