import React from 'react';
import {NavLink} from 'react-router-dom';

const Home = () => (
  <div className="home">
    <div className="bg-img-holder">
      <div className="info text-center">
        <h6>Yasser Hussain</h6>
        <h1>Programmer</h1>
        <span>
          &quot;Choose a job you love, and you will never
          have to work a day in your life.&quot;
        </span>
        <br />
        <i>― Confucius</i>
      </div>
    </div>

    <div className="about-me-holder row middle-xs">
      <div className="col-md-3 col-xs-12 section-name">
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
        </div>
        <div className="row skills-container">
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
          <div className="col-xs">
            <i title="Linux" className="devicon-linux-plain" />
          </div>
        </div>
      </div>


      <div className="col-md-9 col-xs-12 text-holder">
        <p>
          I am a software developer based in Bangalore, India. I worked as Java/MySQL developer
          for a few years when a friend of mine introduced me to&nbsp;
          <span className="special">Node</span>. I was quickly blown away by it and started to
          learn <span className="special">Node</span> and frontend technologies surrounding
          it (like <span className="special">React</span>, <span className="special">Redux</span>,
          <span className="special">Vue</span>) and Data Visualization Technologies
          (like <span className="special">D3</span>).
        </p>

        <p>
          Since the Node is mostly used with MongoDB, I started to learn MongoDB as well.
          This is the first NoSQL database I came across, and it was totally different from
          what I had seen before namely MySQL. But it didn&apos;t take me long to see the
          merits of NoSQL and particularly those of MongoDB.
        </p>

        <p>
          After learning about the NodeJS ecosystem I started to build a few projects with it.
          You can see my projects here&nbsp;
          <NavLink to="/portfolio"><span className="special">Portfolio</span></NavLink>.
          Then finally I built a full stack <span className="special">Web Application</span> for an
          NGO to consolidate what I had learned. You can see it here&nbsp;
          <a href="http://www.sonasarovartrust.org">
            <span className="special">SonaSarovarTrust</span>
          </a>.
        </p>

        <p>
          I am looking for opportunities as Backend or a Frontend engineer on interesting
          projects.
        </p>
      </div>
    </div>


    <div className="more-info-holder row middle-xs">
      <div className="col-md-3 col-xs-12 section-name">
        <h6>PROVIDING VARIOUS SERVICES</h6>
        <h2>Tech I have worked with</h2>
      </div>


      <div className="col-md-9 col-xs-12 text-holder">
        <p>
          As I mentioned above I have experience in working with Java/MySQL, also I have done
          web scraping with <span className="special">Perl</span>&nbsp;
          (and <span className="special">Mechanize</span>).
        </p>
        <p>
          Other <span className="special">Javascript</span> library I have worked with is&nbsp;
          <span className="special">JQuery</span>.
        </p>
        <p>
          Other tech related with <span className="special">Node</span>&nbsp;
          that I have experience working with&nbsp;
          <span className="special">Webpack</span>,&nbsp;
          <span className="special">Socket.IO</span>,&nbsp;
          <span className="special">Mocha</span>.
        </p>
      </div>
    </div>

    <div className="interest-info-holder row middle-xs">
      <div className="col-md-3 col-xs-12 section-name">
        <h2>Technologies that excite me</h2>
      </div>


      <div className="col-md-9 col-xs-12 text-holder">
        <p>
          I love functional programming. See some of my publication related with function
          programming on&nbsp;
          <a href="https://medium.com/@yasserhussain1110">
            <span className="special">Medium</span>
          </a>.
          One of the main reasons why I liked <span className="special">React</span> and&nbsp;
          <span className="special">Redux</span> so much is because they take a functional approach.
        </p>
        <p>
          I have started learning a new functional programming language and framework&nbsp;
          <span className="special">Elixir</span> & <span className="special">Phoenix</span>.&nbsp;
          See some of my projects with them on my&nbsp;
          <NavLink to="/portfolio"><span className="special">Portfolio</span></NavLink>.
        </p>
      </div>
    </div>
  </div>
);

export default Home;
