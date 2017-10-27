import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ScrollToTop from './lib/ScrollToTop';
import Example from './containers/Example';
import SideNavBar from './containers/SideNavBar';
import Home from './containers/Home';

const App = () => (
  <BrowserRouter>
    <div className="row">
      <SideNavBar />
      <ScrollToTop>
        <main className="col-md-10 route-holder">
          <Route path="/" component={Home} />
          <Route path="/web" component={Example} />
        </main>
      </ScrollToTop>
    </div>
  </BrowserRouter>
);

export default App;
