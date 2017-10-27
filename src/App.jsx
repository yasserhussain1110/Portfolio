import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ScrollToTop from './lib/ScrollToTop';
import Example from './containers/Example';
import SideNavBar from './containers/SideNavBar';

const App = () => (
  <div className="row">
    <SideNavBar />
    <BrowserRouter>
      <ScrollToTop>
        <main className="col-md-10">
          <Route path="/" component={Example} />
          <Route path="/web" component={Example} />
        </main>
      </ScrollToTop>
    </BrowserRouter>
  </div>
);

export default App;
