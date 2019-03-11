import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dashLogo from  '../src/assets/final-logo.png';
import OffcImg from '../src/assets/slider-img1.png'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="homeDashboard">
         <div className="background-head">
            <header className="dashHeader">
                <div className="col-md-4">
                  <img src={dashLogo} />
                </div>
                <div className="col-md-8 menuItems">
                  <ul className="m-top-20">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Features</a> </li>
                    <li><a href="#">Screenshot</a> </li>
                    <li><a href="#">Pricing</a> </li>
                    <li><a href="#">Testimonials</a> </li>
                    <li><a href="#">Team</a> </li>
                    <li><a href="#">Contact</a> </li>
                  </ul>
                </div>
            </header>
            <div className="homeContent">
              <div className="col-md-5 headerLeftContant">
                  <h1>Blogging Website</h1>
                  <p>Everything You Need. To Start Selling Online Beautifully</p>
              </div>
              <div className="col-md-7 m-top-50">
                  <img src={OffcImg} />
              </div>
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
