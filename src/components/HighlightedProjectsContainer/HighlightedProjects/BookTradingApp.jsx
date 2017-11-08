import React from 'react';
import PropTypes from 'prop-types';
import fullStack from '../../../lib/data/projects/fullStack';

const BookTradingApp = ({showing}) => (
  <div
    style={{display: showing ? 'block' : 'none'}}
    className="book-trading-app highlighted-project"
  >

    <div className="col-xs-offset-2 col-xs-8 img-container">
      <img alt="Book Trading App" src={fullStack[0].bgImageUrl} />
    </div>

    <h3 className="col-xs-12 text-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={fullStack[0].codeUrl}
      >
        Book Trading App
      </a>
    </h3>

    <div className="col-xs-offset-1 col-xs-10 project-details-container">
      <p>
        Book Trading App for trading books.
      </p>

      <p>
        This app helps people trade books and keep track of books they have traded.
      </p>

      <p>
        Technologies used in this app include&nbsp;
        <span className="highlight">Node, MongoDB, Vue</span>.
      </p>

      <div>
        <p><span className="highlight">BookTradingApp</span> has following features-</p>
        <ul>
          <li>
            User can look at all books belonging to all users.
          </li>

          <li>
            User can add a new book. The backend of this app uses Google&quot;s book API for
            &nbsp; searching books.
          </li>

          <li>
            <span className="highligh">Open/Close/Accept/Reject</span> trade requests to trade
            &nbsp; books.
          </li>
        </ul>
      </div>

      <p>
        For details please see the
        &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={fullStack[0].codeUrl}
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
          href={fullStack[0].liveUrl}
          className="highlight"
        >
          Live App
        </a>.
      </p>
    </div>
  </div>
);

BookTradingApp.propTypes = {
  showing: PropTypes.bool.isRequired
};

export default BookTradingApp;
