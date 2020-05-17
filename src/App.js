import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import propic from './Resources/propic.png'

function App() {
  return (
    <div className = "wrapper">

      <AppBar className = "appbar" position="static" style={{background: '#4E84F0'}}>
      <Toolbar className = "appbar">
      <div className = "header">
        <div className = "home-button"> Home </div>
        <div className = "divider"/>
        <div className = "about-button">About Me</div>
        <div className = "divider"/>
        <div className = "project-button">Projects</div>
        <div className = "divider"/>
        <div className = "resume-button">Resume</div>
        <div className = "divider"/>
        <div className = "contact-button">Contact</div>
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
          I am unafraid of challenges and love working on thought-provoking projects.
        </h4>
        </div>
      </div>
      <div className = "link-icons">
        <img className = "linkedin"/>
        <img className = "github"/>
        <img className = "gitlab"/>
      </div>
      </div>
    </div>
  );
}

export default App;
