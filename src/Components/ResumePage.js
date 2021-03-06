import React, {Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import resumepic from '../Resources/resume.png';
import './Styles/ResumePage.css';

class ResumePage extends Component {
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
        <div className = "wrapper-resume">
    
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
          <div className = "title-about"> My Resume</div>
          <img className = "resume-image" src={resumepic} alt = "resumepic"/>
          </div>

        </div>
        )
    }
}

export default ResumePage;