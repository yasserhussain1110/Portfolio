import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
          <Switch>
            <Route path="/portfolio" component={Example} />
            <Route path="/contact" component={Example} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </ScrollToTop>
    </div>
  </BrowserRouter>
);

export default App;
