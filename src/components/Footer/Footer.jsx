import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return(
  <footer class="py-3 footer-bar">
    <ul class="nav justify-content-center pb-1 mb-1">
    <Link className="footer-link px-2 text-white" to="/login">
      LOGIN
        </Link>
        <Link className="footer-link px-2 text-white" to="/about">
          ABOUT
        </Link>
        <Link className="footer-link px-2 text-white" to="/room-profiles">
          ROOM PROFILES
        </Link>
      <Link className="footer-link px-2 text-white" to="/create-room">
          CREATE ROOM
        </Link>
        </ul>
        <hr className="my-1" />
    <p className="text-center">Created By Alexa Fleming</p>
    

   
  </footer>
  )
}


export default Footer;
