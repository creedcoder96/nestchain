import React, { Component } from 'react';
import './App.css';
import './bella.jpg';

class App extends Component {
  render() {
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Why NestChain?</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Kick Off <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li classNameName="nav-item">
                <a className="nav-link" href="#">Become a Vendor</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">WhitePaper</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="cake,venue...etc"/>
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Look For</button>
            </form>
          </div>
        </nav>

        <div className="row">
          <div className="col-sm-6">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active show" data-toggle="tab" href="#bbb">Bakes By Bella</a>
              </li>
              <li className="nav-item">
                <a className="nav-link show" data-toggle="tab" href="#profile">Angel Cupcakes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cake It</a>
              </li>
              <li className="nav=-item">
                <a className="nav-link" href="#">Fat Panda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Peppers</a>
              </li>
            </ul>
            <div id="myTabContent" class="tab-content">
              <div className="tab-pane fade" id="bbb">
                <p>
                Bella’s (Bakes By Bella) 🇱🇰
                Café & Cakery 
                FOLLOW #weddingsbybella & #birthdayswithbella for our creations 
                OPEN: TUE-SUN: 9am-11pm
                🚧Closed on Monday
                Delivery 🛵: Quickee & Foodie
                youtu.be/RwbAqMeEf_A
                </p>
              </div>
              <div className="tab-pane fade" id="profile">
                <p>
                  lol ne
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <legend>LeaderBoards come here </legend>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
