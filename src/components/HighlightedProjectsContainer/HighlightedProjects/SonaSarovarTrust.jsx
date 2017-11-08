import React from 'react';
import PropTypes from 'prop-types';
import ngoProjects from '../../../lib/data/projects/ngo';

const SonaSarovarTrust = ({showing}) => (
  <div
    style={{display: showing ? 'block' : 'none'}}
    className="sona-sarovar-trust highlighted-project"
  >

    <div className="col-xs-offset-2 col-xs-8 img-container">
      <img alt="Sona Sarovar Trust" src={ngoProjects[0].bgImageUrl} />
    </div>

    <h3 className="col-xs-12 text-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/yasserhussain1110/sona-sarovar-trust"
      >
        SonaSarovarTrust
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
          href="http://www.sonasarovartrust.org"
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

      <div>
        <p>This app has following features-</p>
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
          href="https://github.com/yasserhussain1110/sona-sarovar-trust"
          className="highlight"
        >
          Github Page
        </a>.
      </p>
    </div>
  </div>
);

SonaSarovarTrust.propTypes = {
  showing: PropTypes.bool.isRequired
};

export default SonaSarovarTrust;
