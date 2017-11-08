import React from 'react';
import PropTypes from 'prop-types';
import JQueryGames from '../../../lib/data/projects/jquery';

const T3 = JQueryGames[1];

const TicTacToe = ({showing}) => (
  <div
    style={{display: showing ? 'block' : 'none'}}
    className="book-trading-app highlighted-project"
  >

    <div className="col-xs-offset-2 col-xs-8 img-container">
      <img alt={T3.name} src={T3.bgImageUrl} />
    </div>

    <h3 className="col-xs-12 text-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={T3.codeUrl}
      >
        {T3.name}
      </a>
    </h3>

    <div className="col-xs-offset-1 col-xs-10 project-details-container">
      <p>
        {T3.description}
      </p>

      <p>
        Technologies used in this app include&nbsp;
        <span className="highlight">jQuery</span>.
      </p>

      <div>
        <p><span className="highlight">{T3.name}</span> has following features-</p>
        <ul>
          <li>
            User can play a game of Tic Tac Toe with the computer.
          </li>

          <li>
            Game AI is quite smart, but not perfect. There is a slight chance of victory
            &nbsp; for the user.
          </li>
        </ul>
      </div>

      <p>
        For details please see the
        &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={T3.codeUrl}
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
          href={T3.liveUrl}
          className="highlight"
        >
          Live App
        </a>.
      </p>
    </div>
  </div>
);

TicTacToe.propTypes = {
  showing: PropTypes.bool.isRequired
};

export default TicTacToe;
