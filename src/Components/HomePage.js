import React, {Component } from 'react';
import './Styles/HomePage.css';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import propic from '../Resources/propic.png'
import linkedinpic from '../Resources/linkedin_icon.png'
import githubpic from '../Resources/github_icon.png'
import gitlabpic from '../Resources/gitlab_icon.png'
import { Route, Switch, useLocation} from "react-router-dom";
import About from './AboutPage';
import Project from './ProjectPage';
import Resume from './ResumePage';
import Contact from './ContactPage';


class HomePage extends Component {

render(){
  return (
    <div className = "wrapper">

      <AppBar className = "appbar" position="static" style={{background: '#4E84F0'}}>
      <Toolbar className = "appbar">
      <div className = "header">
        <div className = "home-button" onClick={this.onHomeClick()}> Home </div>
        <div className = "divider"/>
        <div className = "about-button" onClick={this.onAboutClick()}>About Me</div>
        <div className = "divider"/>
        <div className = "project-button" onClick={this.onProjectClick()}>Projects</div>
        <div className = "divider"/>
        <div className = "resume-button" onClick={this.onResumeClick()}>Resume</div>
        <div className = "divider"/>
        <div className = "contact-button" onClick={this.onContactClick()}>Contact</div>
      </div>
      </Toolbar>
      </AppBar>

      <div className = "home-view">
      <div className = "container">
        <img className = "propic" src= {propic} alt ="propic"/>

        <div className = "text">
        <h1>
          Hello I am Brian Li!
        </h1>
        <h2>
          Welcome to my Personal Website
        </h2>
        <h3>
          I am a Junior at Duke University studying CS and Mathematics. I am passionate about and have experience in iOS and MERN Stack development.
        </h3>
        <h4>
          I enjoy challenges and tackling thought-provoking projects
        </h4>
        <div className = "link-icons">
        <a href="https://www.linkedin.com/in/brianli314/">
        <img className = "linkedin" src = {linkedinpic} alt ="linkedinpic"/>
        </a>
        <div className = "divider2"/>
        < a href='https://github.com/bl195'>
        <img className = "github" src={githubpic} alt = "githubpic"/>
        </a>
        <div className = "divider2"/>
        <a href='https://gitlab.oit.duke.edu/bl195'>
        <img className = "gitlab" src ={gitlabpic} alt='gitlabpic'/>
        </a>
        </div>
        </div>
      </div>
      </div>

        <Switch className = "switch">
            <Route path = "/home" component={HomePage}/>
            <Route path = "/aboutme" component={About}/>
            <Route path = "/projects" component={Project}/>
            <Route path = "/resume" component={Resume}/>
            <Route path = "/contact" component={Contact}/>
        </Switch>

    </div>
  );
 }
}

export default HomePage;
