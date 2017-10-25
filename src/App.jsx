import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ScrollToTop from './lib/ScrollToTop';
import Example from './containers/Example';

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <main>
        <Route path="/" component={Example} />
        <Route path="/web" component={Example} />
      </main>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
