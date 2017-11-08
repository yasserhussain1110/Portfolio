import React from 'react';
import {NavLink} from 'react-router-dom';

const SideNavBar = () => (
  <div className="col-md-2 hidden-sm hidden-xs side-nav-bar">
    <div className="text-center col-md-2 side-nav-content">
      <header className="photo">
        <img alt="avatar" src="/static/img/me.jpg" />
        <h5>Yasser Hussain</h5>
      </header>

      <section className="nav">
        <ul className="link-list">
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/highlights">HIGHLIGHTS</NavLink></li>
          <li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
        </ul>
      </section>

      <footer>
        <div className="social-links">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/yasserhussain1110">
            <i className="fa fa-github" />
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/yasserhussain1110">
            <i className="fa fa-codepen" />
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yasser-hussain-41001b45">
            <i className="fa fa-linkedin" />
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/yasserhussain11">
            <i className="fa fa-twitter" />
          </a>
        </div>

        <div className="copyright">
          <p>Copyright Yasser Hussain</p>
          <p>@ 2017</p>
        </div>
      </footer>
    </div>
  </div>
);

export default SideNavBar;
