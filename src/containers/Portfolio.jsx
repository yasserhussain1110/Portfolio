import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
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
          path="/portfolio/full-stack"
          render={() => <PortfolioContent selectedType="fullStack" />}
        />
        <Route path="/portfolio/react" render={() => <PortfolioContent selectedType="react" />} />
        <Route path="/portfolio/vue" render={() => <PortfolioContent selectedType="vue" />} />
        <Route path="/portfolio/jquery" render={() => <PortfolioContent selectedType="jquery" />} />
        <Route path="/portfolio/d3" render={() => <PortfolioContent selectedType="d3" />} />
        <Route
          path="/portfolio/back-end"
          render={() => <PortfolioContent selectedType="backEnd" />}
        />
        <Route path="/portfolio/all" render={() => <PortfolioContent selectedType="all" />} />
        <Route path="/portfolio" render={() => <Redirect to="/portfolio/all" />} />
      </Switch>
    </div>
  </div>
);

export default Portfolio;
