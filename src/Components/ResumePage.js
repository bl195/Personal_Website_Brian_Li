import React, {Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';

class ResumePage extends Component {
    render(){
        return(
            <div>
                 <AppBar className = "appbar" position="static" style={{background: '#4E84F0'}}>
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
            </div>
        )
    }
}

export default ResumePage;