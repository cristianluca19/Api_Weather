import React from 'react';
import SearchBar from './SearchBar.jsx';
import Logo from '../img/weather.png'
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar alert alert-primary">
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width={80} className="d-inline-block align-top" alt="" />
         Weather App
        </span>
      <Link to="/">
      <button className="btn btn-outline-dark">Home</button> 
      </Link>
      <Link to="/about">
        <button className="btn btn-outline-dark">About</button>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
