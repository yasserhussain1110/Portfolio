import React from 'react';
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

    <PortfolioContent />
  </div>
);

export default Portfolio;
