import React from 'react';
import { ReactComponent as IconLinkedin } from './assets/icons/linkedin.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <p>FlexiGeeks</p>
          </div>
          <div className="social">
            <a href="https://github.com/flexigeekshub" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/groups/14393062/" title="Linkedin" target="_blank" rel="noopener noreferrer">
              <IconLinkedin className="icon" />
            </a>
            <a href="https://twitter.com/flexigeeks" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.🚀</h1>
            <p>Hold tight as our magicians are working hard to create the best platform ever.</p>
          </div>
          <a href="http://127.0.0.1:5500/src/subscribe/index.html">
            <div className="cta" >Subscribe us</div>
          </a>
        </div>
        <div className="footer">
          <span><a className="underlined" href="https://github.com/x-imayank" target="_blank" rel="noopener noreferrer"> Code-Crafters</a></span>
        </div>
      </div>

      
    );
  }
}

export default App;