import React, { Component } from "react";
import Router, { Link } from "react-router";
import MediaLink from "./buttons/MediaLink.js";

export default class Main extends Component{
  constructor(){
    super();

    this.state = {
      stackOverflowColor: "#F7CE40",
      gitHubColor: "#F7CE40",
      linkedInColor: "#F7CE40"
    }

    this.mouseEnterStackOverflowIcon = this.mouseEnterStackOverflowIcon.bind(this);
    this.mouseLeaveStackOverflowIcon = this.mouseLeaveStackOverflowIcon.bind(this);
    this.mouseEnterGitHubIcon = this.mouseEnterGitHubIcon.bind(this);
    this.mouseLeaveGitHubIcon = this.mouseLeaveGitHubIcon.bind(this);
    this.mouseEnterLinkedInIcon = this.mouseEnterLinkedInIcon.bind(this);
    this.mouseLeaveLinkedInIcon = this.mouseLeaveLinkedInIcon.bind(this);
  }
  mouseEnterStackOverflowIcon(){
    this.setState({stackOverflowColor: "#ffffff"});
  }
  mouseLeaveStackOverflowIcon(){
    this.setState({stackOverflowColor: "#F7CE40"});
  }
  mouseEnterGitHubIcon(){
    this.setState({gitHubColor: "#ffffff"});
  }
  mouseLeaveGitHubIcon(){
    this.setState({gitHubColor: "#F7CE40"});
  }
  mouseEnterLinkedInIcon(){
    this.setState({linkedInColor: "#ffffff"});
  }
  mouseLeaveLinkedInIcon(){
    this.setState({linkedInColor: "#F7CE40"});
  }
  
  render(){
    return (
      <div className="view-container col">
        <div className="s2"></div>
        <header>
          <nav className="navigator s2 row">
            <div className="s1"></div>
            <div className="s1">
              <button className="media-btn">
                <a href="https://www.linkedin.com/in/patrick-holtzman/" onMouseEnter={this.mouseEnterLinkedInIcon} onMouseLeave={this.mouseLeaveLinkedInIcon}>
                  <MediaLink name="linkedIn" color={this.state.linkedInColor}/>
                </a>
              </button>
            </div>
            <div className="s1">
              <button className="media-btn">
                <a href="https://github.com/Pholtzman88" onMouseEnter={this.mouseEnterGitHubIcon} onMouseLeave={this.mouseLeaveGitHubIcon}>
                  <MediaLink name="gitHub" color={this.state.gitHubColor}/>
                </a>
              </button>
            </div>
            <div className="s1">
              <button className="media-btn">
                <a href="https://stackoverflow.com/users/7846214/pholtzman88?tab=profile" onMouseEnter={this.mouseEnterStackOverflowIcon} onMouseLeave={this.mouseLeaveStackOverflowIcon}>
                    <MediaLink name="stackOverFlow" color={this.state.stackOverflowColor}/>
                </a>
              </button>
            </div>
            <div className="s8"></div>
            <Link to="/About" className="link about s2">
                <h3>About</h3>
            </Link>
            <Link to="/Portfolio" className="link project s2">
                <h3>Projects</h3>
            </Link>
            <Link to="/Contact" className="link contact s2">
                <h3>Contact</h3>
            </Link>
            <div className="s2"></div>
          </nav>
        </header>
        <main className="container s8 col">
            {this.props.children}
        </main>
        <footer className="footer s2">
          <p>&copy;Patrick Holtzman 2017</p>
        </footer>
      </div>
    )
  }
}
