import React from 'react';
import PortfolioContent from '../components/PortfolioContent';

const Portfolio = () => (
  <div className="portfolio row">
    <div className="col-xs-12 text-center">
      <h6>CHECK OUT THESE AWESOME PROJECTS IN</h6>
      <h1>MY PORTFOLIO</h1>
      <h6>Or visit codepen</h6>
    </div>

    <PortfolioContent />
  </div>
);

export default Portfolio;
