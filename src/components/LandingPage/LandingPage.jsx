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
    <div className='container'>
      <div className='row landing-page-banner'>
        <div className='col-4'>
          <img src="images/big-logo.png" alt="Logo" />
        </div>
        <div className='col-8'>
          <p className="h6 text-center landing-page-desc">
            the all-in-one home management app designed to assist you in organizing, documenting, and improving your home projects and maintenance tasks.
          </p>
        </div>
      </div>
      <div className="row landing-page-images">
        <div className="col">
          <img src="images/decor-image.jpg" alt="Decor" />
        </div>
        <div className="col">
          <img src="images/documents-image.jpg" alt="Documents" />
        </div>
        <div className="col">
          <img src="images/home-projects-image.jpg" alt="Home Projects" />
        </div>
        <div className="col">
          <img src="images/appliances-image.jpg" alt="Appliances" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
