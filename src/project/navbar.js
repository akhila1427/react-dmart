import React from 'react';
import logo from './logo.jpg'; 
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-fixed fixed-top justify-content-between">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="DMart Logo" className="navbar-logo" />
          D-mart
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="https://www.dmart.in/contact-us">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="">Shopping</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Add To Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
