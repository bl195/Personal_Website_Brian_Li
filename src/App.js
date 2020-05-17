import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import propic from './Resources/propic.png'

function App() {
  return (
    <div className = "wrapper">

      <AppBar className = "appbar" position="static" style={{background: '#24EBBE'}}>
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

      <div className = "container">

        <img className = "propic" src= {propic} alt ="propic"/>
        <h1>
          Hello I am Brian Li!
        </h1>
        <h2>
          Welcome to my Personal Website!
        </h2>
      </div>

    </div>
  );
}

export default App;
