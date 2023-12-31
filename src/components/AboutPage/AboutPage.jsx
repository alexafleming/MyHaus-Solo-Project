import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container about-container">
      {/* Logo and Description Section */}
      {/* ... (your existing logo and description section) */}
      <div className='row'>

        <div className='col-6'>
          <div className="row">
            <div className="col-md-6">
              <div className="rounded-image-container">
                <img className="rounded-image decor-image-top" src="images/decor-image.jpg" alt="Decor" />
                <div className="image-overlay">
                  <p className="overlay-text">decor</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="rounded-image-container">
                <img className="rounded-image" src="images/documents-image.jpg" alt="Documents" />
                <div className="image-overlay">
                  <p className="overlay-text">documents</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="rounded-image-container">
                <img className="rounded-image home-projects-image-top" src="images/home-projects-image.jpg" alt="Home Projects" />
                <div className="image-overlay">
                  <p className="overlay-text">home projects</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="rounded-image-container">
                <img className="rounded-image" src="images/appliances-image.jpg" alt="Appliances" />
                <div className="image-overlay">
                  <p className="overlay-text">appliances</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6">
          <h2 className="about-title">ABOUT</h2>
          <p className="about-text">
            Tired of keeping track of home improvement projects, room details, and warranties
            in scattered notes and documents? Welcome to MyHaus, your all-in-one home management
            application. MyHaus is designed to help you effortlessly organize, document, and enhance
            your home projects. With MyHaus, your home is not just a place; it's a well-managed sanctuary.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
