import React, {Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import './Styles/AboutPage.css'

class AboutPage extends Component {
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
        <div className = "wrapper">
    
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
          <div className = "title-about"> About me</div>
          <div className = "intro">
                I am currently a junior at Duke University and I am pursuing a B.S. in Computer Science (concentration in Software Systems) and Mathematics. I am passionate about web and mobile app development and am motivated to create technology for social good. I am a tech team lead for HackDuke, the world's premiere hackathon for social good, and am also an active member of Catalyst, the pre-professional society for tech students at Duke. Aside from my professional and academic endeavors, I am an avid bodybuilder/powerlifter, violinist, and foodie.
          </div>
          </div>
        </div>
        )
    }
}

export default AboutPage;