import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import PROJECTS from '../lib/data/projects';

class PortfolioContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedType: 'all'  // one of all, ngo, fullStack, react, vue, jquery, d3, backEnd
    };

    this.changeSelectedType = this.changeSelectedType.bind(this);
  }

  getSelectedProjects() {
    const {selectedType} = this.state;
    return PROJECTS.filter(p => selectedType === 'all' ||
    p.mainType === selectedType ||
    p.otherTypes.includes(selectedType));
  }

  changeSelectedType(e, newType) {
    e.preventDefault();
    this.setState({selectedType: newType});
  }

  render() {
    return (
      <PortfolioContentView
        changeSelectedType={this.changeSelectedType}
        projects={this.getSelectedProjects()}
      />
    );
  }
}

const PortfolioContentView = ({projects, changeSelectedType}) => (
  <div className="portfolio-content col-xs-12">
    <div className="link-holder">
      <ul className="row">
        <li className="col-xs">
          <NavLink onClick={e => changeSelectedType(e, 'all')} to="">All</NavLink>
        </li>
        <li className="col-xs">
          <NavLink onClick={e => changeSelectedType(e, 'ngo')} to="">NGO Project</NavLink>
        </li>
        <li className="col-xs">
          <NavLink onClick={e => changeSelectedType(e, 'fullStack')} to="">
            Full Stack Projects
          </NavLink>
        </li>
        <li className="col-xs">
          <NavLink onClick={e => changeSelectedType(e, 'react')} to="">React</NavLink>
        </li>
        <li className="col-xs">
          <NavLink onClick={e => changeSelectedType(e, 'vue')} to="">Vue</NavLink>
        </li>
        <li className="col-xs">
          <NavLink onClick={e => changeSelectedType(e, 'jquery')} to="">JQuery</NavLink>
        </li>
        <li className="col-xs">
          <NavLink onClick={e => changeSelectedType(e, 'd3')} to="">D3</NavLink>
        </li>
        <li className="col-xs">
          <NavLink onClick={e => changeSelectedType(e, 'backEnd')} to="">Backend API</NavLink>
        </li>
      </ul>
    </div>

    <div className="project-list row">
      {projects.map((project, index) => <ProjectHolder key={index} {...project} />)}
    </div>
  </div>
);

const ProjectHolder = ({name, description, bgImageUrl, liveUrl, codeUrl}) => (
  <div className="col-md-4 col-sm-6 col-xs-12">
    <div
      className="project"
      style={{backgroundImage: `url(${bgImageUrl})`}}
    >
      <div className="project-info">
        <h3>{name}</h3>
        <small>{description}</small>
        <a href={liveUrl}>See it Live</a>
        <a href={codeUrl}>See Source</a>
      </div>
    </div>
  </div>
);


PortfolioContentView.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeSelectedType: PropTypes.func.isRequired
};

ProjectHolder.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgImageUrl: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
  codeUrl: PropTypes.string.isRequired
};


export default PortfolioContent;
