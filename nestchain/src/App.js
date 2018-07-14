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

        <div class="row">
          <div className="col-sm-6">
            <ul class="nav nav-tabs">
              <li class="nav-item show active">
                <a class="nav-link" data-toggle="tab" href="#bbb">Bakes By Bella</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#cupcake">Angel Cupcakes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cake It</a>
              </li>
              <li class="nav=-item">
                <a class="nav-link" href="#">Fat Panda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Peppers</a>
              </li>
            </ul>
            <div id="myTabContent" class="tab-content">
              <div classe="tab-pane fade" id="bbb">
                  <img src="https://instagram.fcmb3-1.fna.fbcdn.net/vp/01c6632c5cbd3335241e8f5e068ab48d/5BCBAFBB/t51.2885-19/s150x150/26872347_169252070528546_1965286728667234304_n.jpg" height="100" width="100" alter="BBB logo"/>
                  <h5>Bella’s (Bakes By Bella) 🇱🇰</h5>
                  <p class="text-muted" align="center">
                  Café & Cakery <br/>
                  FOLLOW #weddingsbybella & #birthdayswithbella for our creations <br/>
                  OPEN: TUE-SUN: 9am-11pm<br/>
                  🚧Closed on Monday<br/>
                  Delivery 🛵: Quickee & Foodie<br/>
                  <a href="youtu.be/RwbAqMeEf_A">youtu.be/RwbAqMeEf_A</a>
                </p>
              </div>
              <div class="tab-pane fade" id="cupcake">
               <p class="text-muted" align="center">
                  Café & Cakery <br/>
                  FOLLOW #weddingsbybella & #birthdayswithbella for our creations <br/>
                  OPEN: TUE-SUN: 9am-11pm<br/>
                  🚧Closed on Monday<br/>
                  Delivery 🛵: Quickee & Foodie<br/>
                  <a href="youtu.be/RwbAqMeEf_A">youtu.be/RwbAqMeEf_A</a>
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
