import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PortfolioContent from '../components/PortfolioContent';

const Portfolio = () => (
  <div className="portfolio row">
    <div className="portfolio-header col-xs-12 text-center">
      <h6>CHECK OUT THESE AWESOME PROJECTS IN</h6>
      <h1>MY PORTFOLIO</h1>
      <h6 className="profile-links">Or visit&nbsp;
        <a href="https://github.com/yasserhussain1110">
          <span className="special">Github</span>
        </a>
        ,&nbsp;
        <a href="https://codepen.io/yasserhussain1110">
          <span className="special">Codepen</span>
        </a>
      </h6>
    </div>

    <div className="portfolio-route-holder">
      <Switch>
        <Route path="/portfolio/ngo" render={() => <PortfolioContent selectedType="ngo" />} />
        <Route
          path="/portfolio/fullStack"
          render={() => <PortfolioContent selectedType="fullStack" />}
        />
        <Route path="/portfolio/react" render={() => <PortfolioContent selectedType="react" />} />
        <Route path="/portfolio/vue" render={() => <PortfolioContent selectedType="vue" />} />
        <Route path="/portfolio/jquery" render={() => <PortfolioContent selectedType="jquery" />} />
        <Route path="/portfolio/d3" render={() => <PortfolioContent selectedType="d3" />} />
        <Route
          path="/portfolio/backend"
          render={() => <PortfolioContent selectedType="backend" />}
        />
        <Route path="/portfolio" render={() => <PortfolioContent selectedType="all" />} />
      </Switch>
    </div>
  </div>
);

export default Portfolio;
