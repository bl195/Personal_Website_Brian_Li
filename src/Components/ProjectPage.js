import React, {Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import './Styles/ProjectPage.css';

class ProjectPage extends Component {
    constructor(props){
        super();
      }
    
      onHomeClick = e => {
        e.preventDefault();
        window.location.href = "/";
      };
    
      onAboutClick = e =>{
        e.preventDefault();
        window.location.href = "/aboutme";
      };
    
      onProjectClick = e=>{
        e.preventDefault();
        window.location.href = "/projects"
      };
    
      onResumeClick = e=>{
        e.preventDefault();
        window.location.href = "/resume"
      };
    
      onContactClick = e=>{
        e.preventDefault();
        window.location.href = "/contact"
      };
    
    
    render(){
      return (
        <div className = "wrapper-project">
    
          <AppBar className = "appbar" position="static" style={{background: '#0099ff'}}>
          <Toolbar className = "appbar">
          <div className = "header">
            <div className = "home-button" onClick = {this.onHomeClick}> Home </div>
            <div className = "divider"/>
            <div className = "about-button" onClick = {this.onAboutClick}>About Me</div>
            <div className = "divider"/>
            <div className = "project-button" onClick = {this.onProjectClick}>Projects</div>
            <div className = "divider"/>
            <div className = "resume-button" onClick = {this.onResumeClick}>Resume</div>
            <div className = "divider"/>
            <div className = "contact-button" onClick = {this.onContactClick}>Contact</div>
          </div>
          </Toolbar>
          </AppBar>
          <div className = "text-container">
          <div className = "title-about"> Selected Projects</div>
          </div>
          <div className = "project-container">
            <div className = "uhg-project">
            <div className = "project-title">
              Covid-19 Resource Coordinator 
            </div>
            <div className = "project-description">
              The Covid-19 Resource Coordinator is a web application that allocates human resources to the hardest hit Covid-19 areas across the globe.
            </div>
            </div>
            <div className = "dukecheck-project">
            <div className = "project-title">
              DukeCheck 
            </div>
            <div className = "project-description">
              DukeCheck is an iOS application that allows Duke students and faculty members to discover and check into events held by Duke organizations and departments. DukeCheck provides customized event feeds and filtering options for users as well as a personal agenda. This mobile app includes a Duke Shibboleth login feature that provides a layer of security and Ruby on Rails framework to support app backend and requests to server database. Project stakeholders included TransACT, Duke OIT, and Duke Athletics.
            </div>
            </div>
            <div className = "illixir-project">
            <div className = "project-title">
              Illixir 
            </div>
            <div className = "project-description">
              Illixir is a web application developed with the MERN stack and has two main features: a facility finder and a remedy repository. 
              The Facility Finder connects users to nearby medical facilities and the remedy repository provides users with home remedies for mild illnesses.
            </div>
            </div>
          </div>
        </div>
        )
    }
}

export default ProjectPage;