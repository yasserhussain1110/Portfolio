import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import PROJECTS from '../lib/data/projects';

class PortfolioContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // one of all, ngo, fullStack, react, vue, jquery, d3, backEnd
      selectedType: props.selectedType
    };

    this.isLinkSelected = this.isLinkSelected.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedType !== this.state.selectedType) {
      this.setState({selectedType: nextProps.selectedType});
    }
  }

  getSelectedProjects() {
    const {selectedType} = this.state;
    return PROJECTS.filter(p => selectedType === 'all' ||
    p.mainType === selectedType ||
    p.otherTypes.includes(selectedType));
  }

  isLinkSelected(link) {
    return this.state.selectedType === link;
  }

  render() {
    return (
      <PortfolioContentView
        projects={this.getSelectedProjects()}
        isLinkSelected={this.isLinkSelected}
      />
    );
  }
}

const PortfolioContentView = ({projects}) => (
  <div className="portfolio-content col-xs-12">
    <div className="link-holder">
      <ul className="row">
        <li className="col-xs">
          <NavLink
            to="/portfolio/all"
          >
            All
          </NavLink>
        </li>
        <li className="col-xs">
          <NavLink
            to="/portfolio/ngo"
          >
            NGO Project
          </NavLink>
        </li>
        <li className="col-xs">
          <NavLink
            to="/portfolio/full-stack"
          >
            Full Stack Projects
          </NavLink>
        </li>
        <li className="col-xs">
          <NavLink
            to="/portfolio/react"
          >
            React
          </NavLink>
        </li>
        <li className="col-xs hide-on-small">
          <NavLink
            to="/portfolio/vue"
          >
            Vue
          </NavLink>
        </li>
        <li className="col-xs hide-on-small">
          <NavLink
            to="/portfolio/jquery"
          >
            JQuery
          </NavLink>
        </li>
        <li className="col-xs hide-on-small">
          <NavLink
            to="/portfolio/d3"
          >
            D3
          </NavLink>
        </li>
        <li className="col-xs hide-on-small">
          <NavLink
            to="/portfolio/back-end"
          >
            Backend API
          </NavLink>
        </li>
      </ul>

      <ul className="row second-line-links show-on-small">
        <li className="col-xs">
          <NavLink
            to="/portfolio/vue"
          >
            Vue
          </NavLink>
        </li>
        <li className="col-xs">
          <NavLink
            to="/portfolio/jquery"
          >
            JQuery
          </NavLink>
        </li>
        <li className="col-xs">
          <NavLink
            to="/portfolio/d3"
          >
            D3
          </NavLink>
        </li>
        <li className="col-xs">
          <NavLink
            to="/portfolio/back-end"
          >
            Backend API
          </NavLink>
        </li>
      </ul>
    </div>

    <div className="project-list row">
      {projects.map((project, index) => <ProjectHolder key={index} {...project} />)}
    </div>
  </div>
);

const ProjectHolder = ({name, description, bgImageUrl, liveUrl, codeUrl}) => (
  <div className="col-md-4 col-sm-6 col-xs-12 project-holder">
    <div
      className="project"
      style={{backgroundImage: `url(${bgImageUrl})`}}
    />
    <div className="project-info">
      <h3>{name}</h3>
      <small>{description}</small>
      <span><a href={liveUrl}>See it Live</a></span>
      <span><a href={codeUrl}>See Source</a></span>
    </div>
  </div>
);


PortfolioContentView.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
};

ProjectHolder.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgImageUrl: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
  codeUrl: PropTypes.string.isRequired
};

PortfolioContent.propTypes = {
  selectedType: PropTypes
    .oneOf(['all', 'ngo', 'fullStack', 'react', 'vue', 'jquery', 'd3', 'backEnd']).isRequired
};


export default PortfolioContent;
