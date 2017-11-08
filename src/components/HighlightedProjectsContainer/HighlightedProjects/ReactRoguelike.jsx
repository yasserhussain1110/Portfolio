import React from 'react';
import PropTypes from 'prop-types';
import reactProjects from '../../../lib/data/projects/react';

const RogueLike = reactProjects[0];

const ReactRoguelike = ({showing}) => (
  <div
    style={{display: showing ? 'block' : 'none'}}
    className="react-rogue-like highlighted-project"
  >

    <div className="col-xs-offset-2 col-xs-8 img-container">
      <img alt={RogueLike.name} src={RogueLike.bgImageUrl} />
    </div>

    <h3 className="col-xs-12 text-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={RogueLike.codeUrl}
      >
        {RogueLike.name}
      </a>
    </h3>

    <div className="col-xs-offset-1 col-xs-10 project-details-container">
      <p>
        {RogueLike.description}.
      </p>

      <p>
        Technologies used in this app include&nbsp;
        <span className="highlight">React</span>.
      </p>

      <div>
        <p><span className="highlight">ReactRoguelike</span> has following features-</p>
        <ul>
          <li>
            A <span className="highlight">Dungeon Crawler game</span> with multiple levels.
          </li>

          <li>
            Code for random map generation is <span className="highlight">custom made</span>.
            &nbsp;That is, no library used.
          </li>
        </ul>
      </div>

      <p>
        For details please see the
        &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={RogueLike.codeUrl}
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
          href={RogueLike.liveUrl}
          className="highlight"
        >
          Live App
        </a>.
      </p>
    </div>
  </div>
);

ReactRoguelike.propTypes = {
  showing: PropTypes.bool.isRequired
};

export default ReactRoguelike;
