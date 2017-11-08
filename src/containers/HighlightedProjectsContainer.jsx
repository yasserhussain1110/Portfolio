import React, {Component} from 'react';
import HighlightedProjects from '../components/HighlightedProjectsContainer/HighlightedProjects';

class HighlightedProjectsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProject: 1
    };

    this.goPrevious = this.goNumberOfSteps.bind(this, -1);
    this.goNext = this.goNumberOfSteps.bind(this, 1);
  }

  goNumberOfSteps(numberOfSteps) {
    let newSelectedProject =
      (this.state.selectedProject + numberOfSteps) % HighlightedProjects.length;

    if (newSelectedProject < 0) {
      newSelectedProject += HighlightedProjects.length;
    }

    this.setState({selectedProject: newSelectedProject});
  }

  isProjectSelected(index) {
    return this.state.selectedProject === index;
  }

  render() {
    return (
      <div className="highlighted-projects-container col-xs-12">
        <h1 className="text-center">HIGHLIGHTED PROJECTS</h1>
        <div className="highlighted-projects-wrapper">
          {
            HighlightedProjects.map(
              (H, index) => (
                <H
                  key={index}
                  showing={this.isProjectSelected(index)}
                />
              ))
          }
        </div>
        <div className="navigation">
          <button onClick={this.goPrevious} className="fa fa-arrow-circle-left" />
          <button onClick={this.goNext} className="fa fa-arrow-circle-right" />
        </div>
      </div>
    );
  }
}

export default HighlightedProjectsContainer;
