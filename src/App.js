import React from 'react';
import './App.css';

import ejep2 from './assets/ejep2.jpg';
import ejep from './assets/ejep.jpg';

import { Link } from 'react-router-dom';



function App() {
  return (
  
    <div className="App">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-success" style={{ height: '80px' }}>
        <div className="container-fluid">
          <div className="navbar-brand text-white titlenav">E-Jeep</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/login"><div className="nav-link text-white marginlink ">Sign In</div></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">

        <div className="row my-5">
          <div className="col-md-6">
            <img src={ejep} alt="Booking" style={{ width: '600px', height: '300px' }}/>
          </div>
          <div className="col-md-6 mt-5">
            <h2>Home</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-md-6">
            <img src={ejep2} alt="Booking" style={{ width: '600px', height: '300px' }}/>
          </div>
          <div className="col-md-6 mt-5">
          <h2>Register</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="btn btn-primary"><Link to="/register"><div className='text-white'>Register</div></Link></button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
