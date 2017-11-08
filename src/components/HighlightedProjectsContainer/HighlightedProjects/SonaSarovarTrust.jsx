import React from 'react';
import PropTypes from 'prop-types';
import NgoProjects from '../../../lib/data/projects/ngo';

const SonaSarovar = NgoProjects[0];

const SonaSarovarTrust = ({showing}) => (
  <div
    style={{display: showing ? 'block' : 'none'}}
    className="sona-sarovar-trust highlighted-project"
  >

    <div className="col-md-offset-2 col-md-8 img-container">
      <img alt={SonaSarovar.name} src={SonaSarovar.bgImageUrl} />
    </div>

    <h3 className="col-xs-12 text-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={SonaSarovar.codeUrl}
      >
        {SonaSarovarTrust.name}
      </a>
    </h3>

    <div className="col-xs-offset-1 col-xs-10 project-details-container">
      <p>
        Full Stack single page web application for Non-Profit Organisation
        &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="highlight"
          href={SonaSarovar.liveUrl}
        >
          SonaSarovarTrust
        </a>.
      </p>

      <p>
        SonaSarovarTrust works for&nbsp;
        <span className="highlight">
          education, health and nourishment of slum children in Mumbai
        </span>.
      </p>

      <p>
        This app will hopefully allow them to improve their online presence, leading
        to more <b>awareness</b>, <b>volunteer support</b> and <b>donations</b>.
      </p>

      <p>
        Technologies used in this app include&nbsp;
        <span className="highlight">Node, MongoDB, Vue</span>.
      </p>

      <div>
        <p><span className="highlight">SonaSarovarTrust</span> has following features-</p>
        <ul>
          <li>
            Engaging UI for visitiors
          </li>

          <li>
            Integration with <span className="special">Online Payment Services</span>
            &nbps;for easier donation.
          </li>

          <li>
            Way for volunteer to get in touch with site admins.
          </li>

          <li>
            Full featured <span className="special">Admin Panel</span>
            &nbsp;for updating site and adding contents.
          </li>
        </ul>
      </div>

      <p>
        For details please see the
        &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={SonaSarovar.codeUrl}
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
          href={SonaSarovar.liveUrl}
          className="highlight"
        >
          Live App
        </a>.
      </p>
    </div>
  </div>
);

SonaSarovarTrust.propTypes = {
  showing: PropTypes.bool.isRequired
};

export default SonaSarovarTrust;
