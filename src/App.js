import React, {Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from './Components/HomePage'
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import propic from './Resources/propic.png'
import linkedinpic from './Resources/linkedin_icon.png'
import githubpic from './Resources/github_icon.png'
import gitlabpic from './Resources/gitlab_icon.png'
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import About from './Components/AboutPage';
import Project from './Components/ProjectPage';
import Resume from './Components/ResumePage';
import Contact from './Components/ContactPage';


class App extends Component {

  render() {
    return (
      <div>

      <Router>
      <Route exact path = "/" component = {HomePage}/>
      <Route exact path = "/aboutme" component = {About}/>
      <Route exact path = "/project" component = {Project}/>
      <Route exact path = "/resume" component = {Resume}/>
      <Route eaxct path = "/contact" component = {Contact}/>
      </Router>

      </div>
    );
  }
  
  }
  export default App;
