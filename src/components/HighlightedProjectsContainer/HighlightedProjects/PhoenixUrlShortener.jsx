import React from 'react';
import PropTypes from 'prop-types';
import BackEnd from '../../../lib/data/projects/backEnd';

const PhoenixProject = BackEnd[0];

const PhoenixUrlShortener = ({showing}) => (
  <div
    style={{display: showing ? 'block' : 'none'}}
    className="phoenix-url-shortener highlighted-project"
  >

    <div className="col-md-offset-2 col-md-8 img-container">
      <img alt={PhoenixProject.name} src={PhoenixProject.bgImageUrl} />
    </div>

    <h3 className="col-xs-12 text-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={PhoenixProject.codeUrl}
      >
        {PhoenixProject.name}
      </a>
    </h3>

    <div className="col-xs-offset-1 col-xs-10 project-details-container">
      <p>
        {PhoenixProject.description}.
      </p>

      <p>
        Technologies used in this app include&nbsp;
        <span className="highlight">Elixir, Phoenix</span>.
      </p>

      <div>
        <p><span className="highlight">{PhoenixProject.name}</span> has following features-</p>
        <ul>
          <li>
            One can pass a URL as a parameter and they will receive a shortened URL in the JSON
            response.
          </li>

          <li>
            When user visits that shortened URL, it will redirect then to their original link.
          </li>
        </ul>
      </div>

      <p>
        For details please see the
        &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={PhoenixProject.codeUrl}
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
          href={PhoenixProject.liveUrl}
          className="highlight"
        >
          Live App
        </a>.
      </p>
    </div>
  </div>
);

PhoenixUrlShortener.propTypes = {
  showing: PropTypes.bool.isRequired
};

export default PhoenixUrlShortener;
