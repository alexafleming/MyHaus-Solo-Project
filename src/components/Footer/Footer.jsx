import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return(
  <footer class="py-3 my-4 footer-bar">
    <ul class="nav justify-content-center pb-1 mb-1">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <Link className="nav-link px-2 text-body-secondary" to="/about">
          About
        </Link>
    </ul>
    <hr className="my-1" />
    <p className="text-center">&copy; Prime Digital Academy</p>
   
  </footer>
  )
}


export default Footer;
