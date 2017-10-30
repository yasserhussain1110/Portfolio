import React from 'react';

const Home = () => (
  <div className="home">
    <div className="bg-img-holder">
      <div className="info text-center">
        <h6>Yasser Hussain</h6>
        <h1>Front End Coder</h1>
        <p>Choose a job you love, and you will never have to work a day in your life.</p>
      </div>
    </div>

    <div className="about-me-holder row middle-xs">
      <div className="col-md-3 icon-holder">
        <h6>How it all started</h6>
        <h2>About Me</h2>
        <div className="row skills-container">
          <div className="col-xs">
            <i title="NodeJS" className="devicon-nodejs-plain" />
          </div>
          <div className="col-xs">
            <i title="Express" className="devicon-express-original" />
          </div>
          <div className="col-xs">
            <i title="MongoDB" className="devicon-mongodb-plain" />
          </div>
          <div className="col-xs">
            <i title="Javascript" className="devicon-javascript-plain" />
          </div>
          <div className="col-xs">
            <i title="React" className="devicon-react-plain" />
          </div>
          <div className="col-xs">
            <i title="VueJS" className="devicon-vuejs-plain" />
          </div>
          <div className="col-xs">
            <i title="JQuery" className="devicon-jquery-plain" />
          </div>
          <div className="col-xs">
            <i title="D3.js" className="devicon-d3js-plain" />
          </div>
          <div className="col-xs">
            <i title="Mocha" className="devicon-mocha-plain" />
          </div>
          <div className="col-xs">
            <i title="Webpack" className="devicon-webpack-plain" />
          </div>
          <div className="col-xs">
            <i title="Bootstrap" className="devicon-bootstrap-plain" />
          </div>
          <div className="col-xs">
            <i title="Sass" className="devicon-sass-plain" />
          </div>
          <div className="col-xs">
            <i title="HTML5" className="devicon-html5-plain" />
          </div>
          <div className="col-xs">
            <i title="CSS3" className="devicon-css3-plain" />
          </div>
          <div className="col-xs">
            <i title="Python" className="devicon-python-plain" />
          </div>
          <div className="col-xs">
            <i title="Java" className="devicon-java-plain" />
          </div>
          <div className="col-xs">
            <i title="MySQL" className="devicon-mysql-plain" />
          </div>
          <div className="col-xs">
            <i title="Tomcat" className="devicon-tomcat-line" />
          </div>
          <div className="col-xs">
            <i title="Git" className="devicon-git-plain" />
          </div>
        </div>
      </div>


      <div className="col-md-9 text-holder">
        <p>
          I worked as a Java developer for 2 years when I came across NodeJS.
          I was blown away by it and started learning it. I acquired fair
          amount of competence in the Node stack by making a few hobby projects
          and one full stack web app for an NGO.
          Technologies I have worked with are given to the right.
        </p>
      </div>
    </div>


    <div className="more-info-holder row middle-xs">
      <div className="col-md-3 icon-holder">
        <h6>PROVIDING VARIOUS SERVICES</h6>
        <h2>Technologies I USE</h2>
      </div>


      <div className="col-md-9 text-holder">
        <p>
          I prefer using NODEJS for backend dev but I have professional experience
          with Java and I have also used Phoenix/Elixir.

          For frontend I mostly use React, Redux though I have made projects with
          Vue, Vuex, etc.
        </p>
      </div>
    </div>
  </div>
);

export default Home;
