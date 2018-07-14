import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Why NestChain?</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Kick Off <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Become a Vendor</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">WhitePaper</a>
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="text" placeholder="cake,venue...etc"/>
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">Look For</button>
            </form>
          </div>
        </nav>
        <div className="row">
          <div className="col-sm-4">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active show" data-toggle="tab" href="#home">Birthday</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active show" data-toggle="tab" href="#profile">Concert</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active show" href="#">Conference</a>
              </li>
              <li class="nav=-item">
                <a class="nav-link active show" href="#">Meet-up</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h1>category wise gigs (3gigs here go)</h1>
          </div>
          <div className="col-sm-4">
            <h1>Leader-board comes here</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
