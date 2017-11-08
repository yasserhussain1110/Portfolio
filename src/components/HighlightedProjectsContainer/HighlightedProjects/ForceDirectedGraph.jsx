import React from 'react';
import PropTypes from 'prop-types';
import D3Projects from '../../../lib/data/projects/d3';

const FDGraph = D3Projects[1];

const ForceDirectedGraph = ({showing}) => (
  <div
    style={{display: showing ? 'block' : 'none'}}
    className="force-directed-graph highlighted-project"
  >

    <div className="col-md-offset-2 col-md-8 img-container">
      <img alt={FDGraph.name} src={FDGraph.bgImageUrl} />
    </div>

    <h3 className="col-xs-12 text-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={FDGraph.codeUrl}
      >
        {FDGraph.name}
      </a>
    </h3>

    <div className="col-xs-offset-1 col-xs-10 project-details-container">
      <p>
        {FDGraph.description}.
      </p>

      <p>
        This is graph made with <span className="highlight">D3.js</span> which shows a Force
        &nbsp;Directed Graph of countries which are connected to other countries by land.
      </p>

      <p>
        Technologies used in this app include&nbsp;
        <span className="highlight">D3.js</span>.
      </p>

      <div>
        <p><span className="highlight">Force Directed Graph</span> has following features-</p>
        <ul>
          <li>
            You can look at all countries represented by their flags
            &nbsp;connected to each other via land.
          </li>

          <li>
            You can move around the flag icons to get a better view.
          </li>
        </ul>
      </div>

      <p>
        For details please see the
        &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={FDGraph.codeUrl}
          className="highlight"
        >
          Github Page
        </a>.
      </p>

      <p>
        You can also look at the
        &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={FDGraph.liveUrl}
          className="highlight"
        >
          Live App
        </a>.
      </p>
    </div>
  </div>
);

ForceDirectedGraph.propTypes = {
  showing: PropTypes.bool.isRequired
};

export default ForceDirectedGraph;
