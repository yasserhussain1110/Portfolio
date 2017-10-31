import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PROJECTS from '../lib/data/projects';

class PortfolioContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedType: 'all'  // one of all, ngo, fullStack, react, vue, jquery, d3, backEnd
    };

    this.changeSelectedType = this.changeSelectedType.bind(this);
    this.isLinkSelected = this.isLinkSelected.bind(this);
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

  changeSelectedType(e, newType) {
    e.preventDefault();
    this.setState({selectedType: newType});
  }

  render() {
    return (
      <PortfolioContentView
        changeSelectedType={this.changeSelectedType}
        projects={this.getSelectedProjects()}
        isLinkSelected={this.isLinkSelected}
      />
    );
  }
}

const activeClassHelper = (isLinkSelected, arg) => (isLinkSelected(arg) ? 'active' : '');

const PortfolioContentView = ({projects, changeSelectedType, isLinkSelected}) => (
  <div className="portfolio-content col-xs-12">
    <div className="link-holder">
      <ul className="row">
        <li className="col-xs">
          <a
            className={activeClassHelper(isLinkSelected, 'all')}
            onClick={e => changeSelectedType(e, 'all')}
            href=""
          >
            All
          </a>
        </li>
        <li className="col-xs">
          <a
            className={activeClassHelper(isLinkSelected, 'ngo')}
            onClick={e => changeSelectedType(e, 'ngo')}
            href=""
          >
            NGO Project
          </a>
        </li>
        <li className="col-xs">
          <a
            className={activeClassHelper(isLinkSelected, 'fullStack')}
            onClick={e => changeSelectedType(e, 'fullStack')}
            href=""
          >
            Full Stack Projects
          </a>
        </li>
        <li className="col-xs">
          <a
            className={activeClassHelper(isLinkSelected, 'react')}
            onClick={e => changeSelectedType(e, 'react')}
            href=""
          >
            React
          </a>
        </li>
        <li className="col-xs">
          <a
            className={activeClassHelper(isLinkSelected, 'vue')}
            onClick={e => changeSelectedType(e, 'vue')}
            href=""
          >
            Vue
          </a>
        </li>
        <li className="col-xs">
          <a
            className={activeClassHelper(isLinkSelected, 'jquery')}
            onClick={e => changeSelectedType(e, 'jquery')}
            href=""
          >
            JQuery
          </a>
        </li>
        <li className="col-xs">
          <a
            className={activeClassHelper(isLinkSelected, 'd3')}
            onClick={e => changeSelectedType(e, 'd3')}
            href=""
          >
            D3
          </a>
        </li>
        <li className="col-xs">
          <a
            className={activeClassHelper(isLinkSelected, 'backEnd')}
            onClick={e => changeSelectedType(e, 'backEnd')}
            href=""
          >
            Backend API
          </a>
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
  changeSelectedType: PropTypes.func.isRequired,
  isLinkSelected: PropTypes.func.isRequired
};

ProjectHolder.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgImageUrl: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
  codeUrl: PropTypes.string.isRequired
};


export default PortfolioContent;
