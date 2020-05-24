import React, {Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import './Styles/ContactPage.css';
class ContactPage extends Component {
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

          <div className = "text-container">
          <div className = "title-about"> Contact Me</div>
          <div className = "contact-email">Email: bl195@duke.edu</div>
          <div className = "contact-phone">Cell Phone: (434) 234-7862</div>
          </div>

          <div className = "contact-form">
              <div className = "form-title">
                  Or Send Me a Direct Message Below!
              </div>
              <div className = "email-label">
                    Your Email:
                </div>
              <form className = "form-email">
                <input className = "label-text" type="text"/>
              </form>
              <div className = "message-label">
                    Message:
                </div>
              <form className = "form-message">
                    <textarea className = "label-message" type="text" rows = {5}/>  
              </form>
              <div className = "submit-button">
                 Submit Message
              </div>
          </div>
        
        </div>
        )
    }
}

export default ContactPage;