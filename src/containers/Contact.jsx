import React from 'react';

const Contact = () => (
  <div className="contact row">
    <div className="col-xs-12 text-center">
      <h1>MY CONTACT INFO</h1>
    </div>

    <div className="contact-info-holder col-xs-12 text-center">

      <div className="contact">
        <div className="field">
          <i className="fa fa-envelope" />
          <strong className="field-name">Email</strong>
        </div>

        <div className="value">
          <p>
            <a
              href="mailto:yasserhussain1110@gmail.com"
            >
              yasserhussain1110@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="contact">
        <div className="field">
          <i className="fa fa-twitter" />
          <strong className="field-name">Twitter</strong>
        </div>

        <div className="value">
          <p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/yasserhussain11"
            >
              yasserhussain11
            </a>
          </p>
        </div>
      </div>

      <div className="contact">
        <div className="field">
          <i className="fa fa-github" />
          <strong className="field-name">Github</strong>
        </div>

        <div className="value">
          <p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/yasserhussain1110"
            >
              yasserhussain1110
            </a>
          </p>
        </div>
      </div>

      <div className="contact">
        <div className="field">
          <i className="fa fa-linkedin" />
          <strong className="field-name">LinkedIn</strong>
        </div>

        <div className="value">
          <p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/yasser-hussain-41001b45"
            >
              yasser-hussain
            </a>
          </p>
        </div>
      </div>

      <div className="contact">
        <div className="field">
          <i className="fa fa-medium" />
          <strong className="field-name">Medium</strong>
        </div>

        <div className="value">
          <p><a href="http://medium.com/@yasserhussain1110">@yasserhussain1110</a></p>
        </div>
      </div>

      <div className="contact">
        <div className="field">
          <i className="fa fa-stack-overflow" />
          <strong className="field-name">Stack Overflow</strong>
        </div>

        <div className="value">
          <p><a href="https://stackoverflow.com/users/1528033/yasser-hussain">yasser-hussain</a></p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
