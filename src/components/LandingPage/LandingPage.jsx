import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';


function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className='container landing-page-container'>
      <div className='row landing-page-banner mx-auto'>
        <div className='col-4'>
          <img src="images/big-logo.png" alt="Logo" />
        </div>
        <div className='col-8'>
          <p className="h6 text-center landing-page-desc mx-auto">
            the all-in-one home management app designed to assist you in organizing, documenting, and improving your home projects and maintenance tasks.
          </p>
        </div>
      </div>
      <div className="row landing-page-images">
        <div className="col">
          <div className="rounded-image-container">
            <img className="rounded-image" src="images/decor-image.jpg" alt="Decor" />
            <div className="image-overlay">
              <p className="overlay-text">decor</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="rounded-image-container">
            <img className="rounded-image" src="images/documents-image.jpg" alt="Documents" />
            <div className="image-overlay">
              <p className="overlay-text">documents</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="rounded-image-container">
            <img className="rounded-image" src="images/home-projects-image.jpg" alt="Home Projects" />
            <div className="image-overlay">
              <p className="overlay-text">home projects</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="rounded-image-container">
            <img className="rounded-image" src="images/appliances-image.jpg" alt="Appliances" />
            <div className="image-overlay">
              <p className="overlay-text">appliances</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
