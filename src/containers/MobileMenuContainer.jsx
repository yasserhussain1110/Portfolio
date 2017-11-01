import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class MobileMenuContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpened: false // false, true
    };

    this.updateMenuState = this.updateMenuState.bind(this);
  }

  updateMenuState() {
    this.setState({menuOpened: !this.state.menuOpened});
  }

  render() {
    const {menuOpened} = this.state;
    return (
      <div className={`mobile-menu-container${menuOpened ? ' open' : ''}`}>
        <nav className="mobile-menu">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <button onClick={this.updateMenuState}>
            <span className="line line-top" />
            <span className="line line-bottom" />
          </button>
        </nav>

        <div className="circle" />
      </div>
    );
  }
}

export default MobileMenuContainer;
